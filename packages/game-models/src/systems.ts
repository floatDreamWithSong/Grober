// 基础系统接口
export interface System {
  name: string
  priority: number
  enabled: boolean
  update(deltaTime: number): void
  destroy?(): void
}

// 游戏实体类型（使用泛型来避免any）
export interface GameEntity {
  id: string
  type: string
  [key: string]: unknown
}

// 游戏世界接口
export interface GameWorld {
  entities: Map<string, GameEntity>
  systems: System[]
  deltaTime: number
  totalTime: number
  paused: boolean
  
  addEntity(entity: GameEntity): void
  removeEntity(id: string): void
  getEntity(id: string): GameEntity | undefined
  getEntitiesByType(type: string): GameEntity[]
  
  addSystem(system: System): void
  removeSystem(name: string): void
  getSystem(name: string): System | undefined
  
  update(deltaTime: number): void
  pause(): void
  resume(): void
  destroy(): void
}

// 事件回调函数类型
export type EventCallback = (...args: unknown[]) => void

// 事件系统接口
export interface EventSystem {
  on(event: string, callback: EventCallback): void
  off(event: string, callback: EventCallback): void
  emit(event: string, ...args: unknown[]): void
  once(event: string, callback: EventCallback): void
}

// 游戏事件类型
export interface GameEvent {
  type: string
  timestamp: number
  data?: unknown
}

// 常见游戏事件
export enum GameEventType {
  ENTITY_CREATED = 'entity_created',
  ENTITY_DESTROYED = 'entity_destroyed',
  COLLISION = 'collision',
  PLAYER_DAMAGED = 'player_damaged',
  PLAYER_HEALED = 'player_healed',
  ENEMY_DEFEATED = 'enemy_defeated',
  ITEM_COLLECTED = 'item_collected',
  LEVEL_COMPLETED = 'level_completed',
  GAME_OVER = 'game_over',
  SCORE_CHANGED = 'score_changed',
}

// 碰撞事件数据
export interface CollisionEventData {
  entityA: string
  entityB: string
  point: { x: number; y: number }
  normal: { x: number; y: number }
}

// 伤害事件数据
export interface DamageEventData {
  target: string
  source?: string
  amount: number
  damageType: DamageType
}

// 伤害类型
export enum DamageType {
  PHYSICAL = 'physical',
  MAGICAL = 'magical',
  FIRE = 'fire',
  ICE = 'ice',
  POISON = 'poison',
} 