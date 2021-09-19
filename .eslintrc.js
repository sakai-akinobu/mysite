module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "react",
    "@typescript-eslint",
  ],
  extends: [
    "plugin:react/recommended",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "default",
        "format": ["camelCase"],
      },
      {
        "selector": "class",
        "format": ["camelCase"],
      },
      {
        "selector": "typeAlias",
        "format": ["PascalCase"],
      },
      {
        "selector": "property",
        "format": null,
      },
      {
        "selector": "variable",
        "format": [
          "camelCase",
          "PascalCase",
        ],
        "leadingUnderscore": "allow",
      }
    ],
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-use-before-define": "error",
  },
};
