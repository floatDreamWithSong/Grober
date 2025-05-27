import { Player, TurnBasedPlayer } from "./hero";

export abstract class Game {
  public readonly roomId: number;
  public readonly players: Player[];
  constructor(
    players: Player[],
    roomId: number
  ) {
    this.players = players;
    this.roomId = roomId;
  }
  abstract start(): void;
  abstract end(): void;
}

export abstract class TurnBasedGame extends Game {
  public turn: number;
  public createAt: number;
  constructor(
    public readonly players: [TurnBasedPlayer, TurnBasedPlayer],
    public readonly roomId: number
  ) {
    super(players, roomId);
    this.turn = 0;
    this.createAt = Date.now();
  }
  abstract onTurnStart(): void;
  abstract onTurnEnd(): void;
}

export * from './caculator'
export * from './card'
export * from './effect'
export * from './hero'
export * from './operation'
export * from './type'
export * from './constants'