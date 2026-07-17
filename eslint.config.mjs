import js from '@eslint/js'
import globals from 'globals'
import pluginCypress from 'eslint-plugin-cypress'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['cypress/**/*.js', '*.js'],

    extends: [
      js.configs.recommended,
      pluginCypress.configs.recommended,
    ],

    languageOptions: {
      ecmaVersion: 'latest',

      sourceType: 'module',

      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
])