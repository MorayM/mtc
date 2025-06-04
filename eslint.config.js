import eslint from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import astroPlugin from 'eslint-plugin-astro'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import astroParser from 'astro-eslint-parser'

export default [
  eslint.configs.recommended,
  {
    files: ['**/*.{js,ts}'],
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'prettier/prettier': 'error',
      ...tseslint.configs.recommended.rules,
      ...prettierConfig.rules,
    },
  },
  {
    files: ['**/*.astro'],
    plugins: {
      astro: astroPlugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {
      'prettier/prettier': 'error',
      ...astroPlugin.configs.recommended.rules,
      ...prettierConfig.rules,
    },
  },
]
