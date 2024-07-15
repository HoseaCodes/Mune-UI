module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier', // Uses eslint-config-prettier to disable ESLint rules that would conflict with prettier
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Add your custom rules here
  },
};
