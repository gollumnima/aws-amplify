module.exports = {
  plugins: [],
  extends: [
    'react-app',
    'airbnb',
  ],
  rules: {
    'react/function-component-definition': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/jsx-props-no-spreading': ['warn'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-unresolved': 'off',
  },
};
