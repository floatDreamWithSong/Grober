import tseslint from 'typescript-eslint';
import config from '@grober/eslint-config/base'

export default [
  ...config,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  ...tseslint.configs.recommendedTypeChecked.map(cfg => ({
    ...cfg,
    rules: {
      ...cfg.rules,
      // NestJS 特定规则覆盖
      '@typescript-eslint/no-explicit-any': 'off', // NestJS中经常需要使用any
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      
      // 允许console.log在服务端
      'no-console': 'off',
    },
  })),
]