// 基础实体接口
export interface Entity {
  id: string;
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  active: boolean;
}

// 玩家实体
export interface Player extends Entity {
  type: "player";
  health: number;
  maxHealth: number;
  speed: number;
  direction: Direction;
  inventory: Item[];
}

// 敌人实体
export interface Enemy extends Entity {
  type: "enemy";
  health: number;
  maxHealth: number;
  speed: number;
  damage: number;
  aiType: AIType;
  targetId?: string;
}

// 道具实体
export interface Item extends Entity {
  type: "item";
  itemType: ItemType;
  value: number;
  stackable: boolean;
  quantity: number;
}

// 子弹实体
export interface Projectile extends Entity {
  type: "projectile";
  damage: number;
  speed: number;
  direction: Direction;
  ownerId: string;
  lifeTime: number;
}

// 障碍物实体
export interface Obstacle extends Entity {
  type: "obstacle";
  destructible: boolean;
  health?: number;
}

// 方向枚举
export enum Direction {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

// AI类型枚举
export enum AIType {
  PASSIVE = "passive",
  AGGRESSIVE = "aggressive",
  PATROL = "patrol",
  GUARD = "guard",
}

// 道具类型枚举
export enum ItemType {
  HEALTH_POTION = "health_potion",
  WEAPON = "weapon",
  ARMOR = "armor",
  KEY = "key",
  COIN = "coin",
}
