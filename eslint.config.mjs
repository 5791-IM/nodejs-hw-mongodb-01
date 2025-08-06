import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginImport from 'eslint-plugin-import';

export default [
  pluginJs.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: { globals: globals.node },
    plugins: {
      import: pluginImport,
    },
    rules: {
      semi: 'error',
      'no-unused-vars': ['error', { args: 'none' }],
      'no-undef': 'error',
      'import/extensions': ['error', 'always'], // требуем указывать расширение .js
    },
  },
];

// import globals from 'globals';
// import pluginJs from '@eslint/js';

// export default [
//   pluginJs.configs.recommended,
//   {
//     files: ['src/**/*.js'],
//     languageOptions: { globals: globals.node },
//     rules: {
//       semi: 'error',
//       'no-unused-vars': ['error', { args: 'none' }],
//       'no-undef': 'error',
//     },
//   },
// ];

// export default [
//   {languageOptions: { globals: globals.node }},
//   pluginJs.configs.recommended,
// ];
