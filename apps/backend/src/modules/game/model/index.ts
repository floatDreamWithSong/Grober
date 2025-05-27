import { Card, Effect, GAME_CONSTANTS, HeroKeys, HeroMap, TurnBasedGame, TurnBasedPlayer, VariableHeroAttribute } from '@grober/game-models';

export class ServerTurnBasedGame extends TurnBasedGame {
  constructor(
    players: [ServerPlayer, ServerPlayer],
    roomId: number
  ) {
    super(players, roomId);
  }
  mergeDiff(diff: VariableHeroAttribute, player: TurnBasedPlayer): void {
    player.health += diff.health;
    player.energy += diff.energy;
    player.shield += diff.shield;
    player.armor += diff.armor;
    player.attack += diff.attack;
    player.maxHealth += diff.maxHealth;
    player.maxEnergy += diff.maxEnergy;
    player.maxShield += diff.maxShield;
    player.maxArmor += diff.maxArmor;
    player.maxAttack += diff.maxAttack;
    player.extraEnergyRecovery += diff.extraEnergyRecovery
    player.extraShieldRecovery += diff.extraShieldRecovery
    // refine
    player.energy < 0 ? player.energy = 0 : void (0);
    player.shield < 0 ? player.energy = 0 : void (0);
    player.armor < 0 ? player.armor = 0 : void (0);
    player.attack < 1 ? player.attack = 1 : void (0);
    player.maxHealth < player.baseHealth ? player.maxHealth = player.baseHealth : void (0);
    player.maxEnergy < player.baseEnergy ? player.maxEnergy = player.baseEnergy : void (0);
    player.maxShield < player.baseShield ? player.maxShield = player.baseShield : void (0);
    player.maxArmor < player.baseArmor ? player.maxArmor = player.baseArmor : void (0);
    player.maxAttack < player.baseAttack ? player.maxAttack = player.baseAttack : void (0);
    player.extraEnergyRecovery < 0 ? player.extraEnergyRecovery = 0 : void (0);
    player.extraShieldRecovery < 0 ? player.extraShieldRecovery = 0 : void (0);
    player.health > player.maxHealth ? player.health = player.maxHealth : void (0);
    player.energy > player.maxEnergy ? player.energy = player.maxEnergy : void (0);
    player.shield > player.maxShield ? player.shield = player.maxShield : void (0);
    player.armor > player.maxArmor ? player.armor = player.maxArmor : void (0);
    player.attack > player.maxAttack ? player.attack = player.maxAttack : void (0);
  }
  onTurnStart(): void {
    // 回合开始时
    this.turn++;
    // TODO: 通知客户端（在其上一级调用函数中）

    // 同步计算效果
    this.players.forEach(player => {
      const _diffArray: VariableHeroAttribute[] = [];
      for (let i = 0; i < player.effects.length;) {
        const effect = player.effects[i];
        effect.operations.forEach(operation => {
          const fromPlayer = this.players.find(p => p.id === effect.fromPlayerId);
          if (!fromPlayer) {
            throw new Error('From player not found');
          }
          _diffArray.push(operation.apply(fromPlayer, player));
        })
        if (effect.duration > 0 && --effect.duration === 0) {
          player.effects.splice(i, 1);
        } else {
          i++;
        }
      }
      // 客户端需要将计算结果逐步展现
      // 服务端直接合并计算结果
      _diffArray.forEach(diff => {
        this.mergeDiff(diff, player);
      })
    })
    if (this.detectPlayerDead()) {
      this.end();
    }
  }
  onTurnEnd(): void {
    // TODO: 通知客户端（在其上一级调用函数中），
    // 回复能量
    this.players.forEach(player => {
      player.energy += GAME_CONSTANTS.BASE_ENERGY_RECOVERY + player.extraEnergyRecovery;
    })
    // 回复护盾
    this.players.forEach(player => {
      player.shield += GAME_CONSTANTS.BASE_SHIELD_RECOVERY + player.extraShieldRecovery;
    })
    // TODO: 发牌*3
    
  }
  start() {
    // TODO: 返回房间初始信息
  }
  end(): void {
    // TODO: 结算
  }
  detectPlayerDead(): boolean {
    return this.players.some(player => player.health <= 0)
  }
  detectOffline(): void {
    // TODO: 检测玩家掉线
    // TODO: 每10s发送心跳包，如果累计3次未收到心跳包响应，则认为掉线；如果客户端长时间未收到服务端的响应，则提醒用户掉线
  }
}

export class ServerPlayer implements TurnBasedPlayer {
  effects: Effect[];
  cards: Card[];
  useCard(cardIndex: number) {
    if (cardIndex < 0 || cardIndex >= this.cards.length) {
      throw new Error('Invalid card index');
    }
    return this.cards.splice(cardIndex, 1)[0]
  }
  addCard(card: Card): void {
    this.cards.push(card);
  }
  id: number;
  name: string;
  maxHealth: number;
  baseHealth: number;
  maxEnergy: number;
  baseEnergy: number;
  maxShield: number;
  baseShield: number;
  maxArmor: number;
  baseArmor: number;
  maxAttack: number;
  baseAttack: number;
  health: number;
  energy: number;
  shield: number;
  armor: number;
  attack: number;
  extraEnergyRecovery: number;
  extraShieldRecovery: number;
  constructor(userId: number, baseHero: HeroKeys, cards: Card[], effects: Effect[]) {
    const hero = HeroMap[baseHero];
    this.id = userId;
    this.name = hero.name;
    this.maxHealth = hero.maxHealth;
    this.baseHealth = hero.baseHealth;
    this.health = hero.baseHealth;
    this.maxEnergy = hero.maxEnergy;
    this.baseEnergy = hero.baseEnergy;
    this.energy = hero.baseEnergy;
    this.maxShield = hero.maxShield;
    this.baseShield = hero.baseShield;
    this.shield = hero.baseShield;
    this.maxArmor = hero.maxArmor;
    this.baseArmor = hero.baseArmor;
    this.armor = hero.baseArmor;
    this.maxAttack = hero.maxAttack;
    this.baseAttack = hero.baseAttack;
    this.attack = hero.baseAttack;
    this.extraEnergyRecovery = hero.extraEnergyRecovery;
    this.extraShieldRecovery = hero.extraShieldRecovery;
    this.effects = effects;
    this.cards = cards;
  }
}
