module.exports = {
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "json",
    "react",
  ],
  rules: {
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-explicit-any": ["error"],
    "arrow-parens": ["error", "always"],
    "class-methods-use-this": ["warn"],
    "import/prefer-default-export": false,
    "quotes": ["error", "double"],
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
