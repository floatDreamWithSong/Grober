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
