# @grober/eslint-config

共享的ESLint配置包，为整个monorepo提供统一的代码质量标准。

## 配置文件

### `base.js`
基础TypeScript配置，适用于Node.js环境。包含：
- TypeScript推荐规则
- 基础代码质量规则
- Prettier集成

### `react.js`
React专用配置，适用于前端React应用。包含：
- 基础TypeScript规则
- React和React Hooks规则
- React Refresh支持
- 浏览器环境配置

## 使用方法

### 在React应用中使用

```javascript
// eslint.config.js
import config from '@grober/eslint-config/react'

export default config
```

### 在Node.js应用中使用

```javascript
// eslint.config.mjs
import config from '@grober/eslint-config/base'

export default config
```

### 自定义规则

如果需要添加特定规则，可以扩展配置：

```javascript
// eslint.config.mjs
import config from '@grober/eslint-config/base'

export default [
  ...config,
  {
    rules: {
      // 你的自定义规则
      'no-console': 'off',
    },
  },
]
```

## 规则说明

### 通用规则
- `@typescript-eslint/no-unused-vars`: 禁止未使用的变量（以_开头的参数除外）
- `@typescript-eslint/no-explicit-any`: 警告使用any类型
- `@typescript-eslint/no-non-null-assertion`: 警告使用非空断言
- `no-console`: 警告使用console（服务端除外）

### React特定规则
- `react/react-in-jsx-scope`: 关闭（React 17+不需要导入React）
- `react/prop-types`: 关闭（使用TypeScript类型检查）
- `react-hooks/*`: 启用React Hooks相关规则
- `react-refresh/only-export-components`: 支持React Fast Refresh

## 依赖

确保安装了必要的ESLint插件：
- `eslint`
- `typescript-eslint` 
- `eslint-config-prettier`
- `eslint-plugin-react`（React配置需要）
- `eslint-plugin-react-hooks`（React配置需要）
- `eslint-plugin-react-refresh`（React配置需要）
