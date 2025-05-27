// 游戏配置常量
export const GAME_CONFIG = {
  // 画面设置
  CANVAS_WIDTH: 1920,
  CANVAS_HEIGHT: 1080,
  TARGET_FPS: 60,
} as const;

// 图层深度常量
export const Z_LAYERS = {
  BACKGROUND: 0,
  EFFECTS: 60,
  UI: 100,
  DEBUG: 1000,
} as const;

// 颜色常量
export const COLORS = {
  // 基础颜色
  WHITE: 0xffffff,
  BLACK: 0x000000,
  RED: 0xff0000,
  GREEN: 0x00ff00,
  BLUE: 0x0000ff,
  YELLOW: 0xffff00,
  CYAN: 0x00ffff,
  MAGENTA: 0xff00ff,

  // UI颜色
  UI_BACKGROUND: 0x2c3e50,
  UI_TEXT: 0xecf0f1,
  UI_ACCENT: 0x3498db,
  UI_SUCCESS: 0x27ae60,
  UI_WARNING: 0xf39c12,
  UI_DANGER: 0xe74c3c,
} as const;

// 音效常量
export const AUDIO_EVENTS = {
  // UI音效
  BUTTON_CLICK: "button_click",
  MENU_OPEN: "menu_open",
  MENU_CLOSE: "menu_close",

  // 背景音乐
  BGM_MENU: "bgm_menu",
  BGM_GAME: "bgm_game",
} as const;

export const GAME_CONSTANTS = {
  // 基础能量恢复
  BASE_ENERGY_RECOVERY: 10,
  // 基础护盾回复
  BASE_SHIELD_RECOVERY: 10,
} as const;