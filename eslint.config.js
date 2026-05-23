const tseslint = require("typescript-eslint");
const reactPlugin = require("eslint-plugin-react");
const eslintConfigPrettier = require("eslint-config-prettier");

module.exports = tseslint.config(
  {
    files: ["src/**/*.tsx", "src/**/*.ts"],
    plugins: {
      react: reactPlugin,
    },
    extends: [
      ...tseslint.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs["jsx-runtime"].rules,
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "default",
          format: ["camelCase"],
        },
        {
          selector: "import",
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: "class",
          format: ["camelCase"],
        },
        {
          selector: "typeAlias",
          format: ["PascalCase"],
        },
        {
          selector: "property",
          format: null,
        },
        {
          selector: "variable",
          format: ["camelCase", "PascalCase"],
          leadingUnderscore: "allow",
        },
      ],
      "@typescript-eslint/consistent-type-assertions": "error",
      "@typescript-eslint/adjacent-overload-signatures": "error",
      "@typescript-eslint/no-empty-object-type": "error",
      "@typescript-eslint/triple-slash-reference": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-use-before-define": "error",
    },
  },
  eslintConfigPrettier,
);
