// 游戏配置常量
export const GAME_CONFIG = {
  // 画面设置
  CANVAS_WIDTH: 1920,
  CANVAS_HEIGHT: 1080,
  TARGET_FPS: 60,

  // 玩家设置
  PLAYER_SPEED: 200,
  PLAYER_MAX_HEALTH: 100,
  PLAYER_SIZE: { width: 32, height: 32 },

  // 敌人设置
  ENEMY_SPEED: 100,
  ENEMY_HEALTH: 50,
  ENEMY_DAMAGE: 10,
  ENEMY_SIZE: { width: 24, height: 24 },

  // 子弹设置
  PROJECTILE_SPEED: 400,
  PROJECTILE_DAMAGE: 25,
  PROJECTILE_SIZE: { width: 8, height: 8 },
  PROJECTILE_LIFETIME: 3000, // 毫秒

  // 道具设置
  ITEM_SIZE: { width: 16, height: 16 },
  HEALTH_POTION_HEAL: 25,
  COIN_VALUE: 10,

  // 物理设置
  GRAVITY: 980, // 像素/秒²
  FRICTION: 0.8,
  BOUNCE_FACTOR: 0.6,

  // 游戏机制
  INVULNERABILITY_TIME: 1000, // 毫秒
  RESPAWN_TIME: 3000, // 毫秒
  LEVEL_COMPLETION_DELAY: 2000, // 毫秒
} as const;

// 输入键位映射
export const INPUT_KEYS = {
  // 移动
  MOVE_UP: ["KeyW", "ArrowUp"],
  MOVE_DOWN: ["KeyS", "ArrowDown"],
  MOVE_LEFT: ["KeyA", "ArrowLeft"],
  MOVE_RIGHT: ["KeyD", "ArrowRight"],

  // 动作
  ATTACK: ["Space", "Mouse0"],
  INTERACT: ["KeyE"],
  JUMP: ["Space"],

  // 界面
  PAUSE: ["Escape"],
  INVENTORY: ["KeyI"],
  MAP: ["KeyM"],

  // 调试
  DEBUG_TOGGLE: ["F3"],
  GOD_MODE: ["F4"],
} as const;

// 图层深度常量
export const Z_LAYERS = {
  BACKGROUND: 0,
  TERRAIN: 10,
  ITEMS: 20,
  ENEMIES: 30,
  PLAYER: 40,
  PROJECTILES: 50,
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

  // 游戏特定颜色
  PLAYER_COLOR: 0x4a90e2,
  ENEMY_COLOR: 0xe24a4a,
  HEALTH_COLOR: 0x4ae24a,
  DAMAGE_COLOR: 0xe2e24a,

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
  // 玩家音效
  PLAYER_MOVE: "player_move",
  PLAYER_ATTACK: "player_attack",
  PLAYER_HURT: "player_hurt",
  PLAYER_HEAL: "player_heal",
  PLAYER_DEATH: "player_death",

  // 敌人音效
  ENEMY_HURT: "enemy_hurt",
  ENEMY_DEATH: "enemy_death",
  ENEMY_ATTACK: "enemy_attack",

  // 环境音效
  ITEM_PICKUP: "item_pickup",
  DOOR_OPEN: "door_open",
  EXPLOSION: "explosion",

  // UI音效
  BUTTON_CLICK: "button_click",
  MENU_OPEN: "menu_open",
  MENU_CLOSE: "menu_close",

  // 背景音乐
  BGM_MENU: "bgm_menu",
  BGM_GAME: "bgm_game",
  BGM_BOSS: "bgm_boss",
} as const;
