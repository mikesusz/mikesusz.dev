import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['dist/**', '.astro/**', 'src/env.d.ts', 'src/pages/stats.astro'],
  },
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  eslintConfigPrettier,
];
