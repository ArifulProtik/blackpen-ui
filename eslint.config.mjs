import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import js from '@eslint/js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname, // optional
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'eslint:recommended',
    'prettier',
  ),
];

export default eslintConfig;
