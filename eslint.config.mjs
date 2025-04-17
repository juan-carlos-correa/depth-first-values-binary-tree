import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs}'] },
  { files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.node } },
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended', prettier],
    rules: {
      'no-unused-vars': 'off',
    },
  },
]);
