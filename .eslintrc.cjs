export default {
	env: {
		browser: true,
		es2021: true,
		jest: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'react/function-component-definition': [
			2,
			{
				namedComponents: 'function-declaration',
				unnamedComponents: 'arrow-function'
			}
		],
		'react/prop-types': 0,
		'react/destructuring-assignment': 0,
		'react/react-in-jsx-scope': 0,
		'react/button-has-type': 0,
		'react/jsx-filename-extension': 0,
		'react/jsx-props-no-spreading': 0,
		'jsx-a11y/no-autofocus': 0,
		'import/prefer-default-export': 0,
		'no-plusplus': 0,
		'no-case-declarations': 0,
		'default-param-last': 0,
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'import/no-unresolved': 0,
		'import/extensions': 0,
		'no-use-before-define': 0,
		'no-shadow': 0,
		'@typescript-eslint/no-shadow': 1,
		'@typescript-eslint/ban-types': 0,
		'react/require-default-props': 0,
		'@typescript-eslint/no-non-null-assertion': 0
	}
}
