module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'always'],
    'no-unused-vars': 1,
		'indent': ['warn', 2],
    'no-multiple-empty-lines': ['warn', { 'max': 2, 'maxEOF': 0 }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
