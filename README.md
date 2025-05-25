# Grober Game

一个基于Turborepo的全栈游戏项目，使用现代Web技术栈构建。

## 项目结构

``` txt
grober/
├── apps/
│   ├── frontend/          # 前端游戏应用 (Vite + React + TypeScript + Zustand + Pixi.js)
│   └── backend/           # 后端API服务
├── packages/
│   ├── api/              # API接口定义和数据校验 (Zod)
│   ├── game-models/      # 共享游戏数据模型
│   ├── typescript-config/ # TypeScript配置
│   └── eslint-config/    # ESLint配置
└── ...
```

## 技术栈

### 前端 (apps/frontend)

- **Vite** - 构建工具
- **React 18** - UI框架
- **TypeScript** - 类型安全
- **Zustand** - 状态管理
- **Pixi.js** - 2D游戏渲染引擎

### 后端 (apps/backend)

- 待实现

### 共享包

- **@grober/api** - API接口定义和Zod数据校验
- **@grober/game-models** - 游戏实体、组件、系统模型
- **@grober/typescript-config** - 共享TypeScript配置
- **@grober/eslint-config** - 共享ESLint配置

## 开发指南

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
# 启动所有应用的开发模式
pnpm dev

# 仅启动前端
pnpm --filter frontend dev

# 仅启动后端
pnpm --filter backend dev
```

### 构建

```bash
# 构建所有包和应用
pnpm build

# 构建特定应用
pnpm --filter frontend build
```

### 代码检查

```bash
# 运行ESLint
pnpm lint

# 类型检查
pnpm check-types
```

## 游戏特性

- 全屏游戏体验
- 基于Pixi.js的高性能2D渲染
- 组件化游戏架构
- 类型安全的前后端通信
- 实时游戏状态管理

## 开发规范

1. 所有共享类型定义在 `@grober/api` 和 `@grober/game-models` 包中
2. 使用Zod进行运行时数据校验
3. 遵循TypeScript严格模式
4. 使用ESLint保证代码质量
5. 组件化的游戏实体设计

## 许可证

MIT
