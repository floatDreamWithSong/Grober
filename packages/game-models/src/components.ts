// 位置组件
export interface PositionComponent {
  x: number;
  y: number;
  z?: number;
}

// 速度组件
export interface VelocityComponent {
  vx: number;
  vy: number;
  maxSpeed: number;
}

// 渲染组件
export interface RenderComponent {
  sprite: string;
  width: number;
  height: number;
  visible: boolean;
  alpha: number;
  rotation: number;
  scale: { x: number; y: number };
}

// 碰撞组件
export interface CollisionComponent {
  width: number;
  height: number;
  offsetX: number;
  offsetY: number;
  solid: boolean;
  trigger: boolean;
}

// 生命值组件
export interface HealthComponent {
  current: number;
  max: number;
  regeneration: number;
  invulnerable: boolean;
  invulnerabilityTime: number;
}

// 输入组件
export interface InputComponent {
  keys: Set<string>;
  mouseX: number;
  mouseY: number;
  mouseButtons: Set<number>;
}

// 动画组件
export interface AnimationComponent {
  currentAnimation: string;
  animations: Record<string, Animation>;
  frameTime: number;
  currentFrame: number;
  playing: boolean;
  loop: boolean;
}

// 动画定义
export interface Animation {
  frames: number[];
  duration: number;
  loop: boolean;
}

// 音效组件
export interface AudioComponent {
  sounds: Record<string, string>;
  volume: number;
  muted: boolean;
}

// 计时器组件
export interface TimerComponent {
  timers: Record<string, Timer>;
}

// 计时器定义
export interface Timer {
  duration: number;
  elapsed: number;
  callback?: () => void;
  repeat: boolean;
  active: boolean;
}
