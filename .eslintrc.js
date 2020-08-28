module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    project: "./tsconfig.json",
  },
  rules: {
    "quotes": ["error", "double"],
    "indent": ["error", 2],
    "complexity": ["error", 20],
    "consistent-return": ["error"],
    "semi": ["error", "never"],
    "semi-style": ["error", "first"],
    "no-return-await": ["error"],
    "no-empty-function": ["error", { allow: ["constructors", "arrowFunctions"] }],
    "comma-dangle": ["error", {
      arrays: "always-multiline",
      objects: "always-multiline",
      imports: "always-multiline",
      exports: "always-multiline",
      functions: "only-multiline",
    }],
    "quote-props": ["error", "consistent-as-needed"],
    "object-curly-spacing": ["error", "always"],
    "key-spacing": ["error", { beforeColon: false, afterColon: true, mode: "strict" }],
    "max-len": ["error", { code: 120 }],
    "operator-linebreak": ["error"],
    "space-infix-ops": ["error"],
    "comma-spacing": ["error"],
    "array-bracket-spacing": ["error"],
    "space-in-parens": ["error"],
    "space-before-function-paren": ["error", {
      anonymous: "never",
      named: "never",
      asyncArrow: "always",
    }],
    "no-extra-parens": ["error", "all", {
      nestedBinaryExpressions: false,
      ignoreJSX: "multi-line",
      enforceForArrowConditionals: false,
    }],
    "no-trailing-spaces": ["error"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "func-call-spacing": ["error", "never"],
    "prefer-arrow-callback": ["error"],
    "prefer-spread": ["error"],
    "prefer-object-spread": ["error"],
    "no-useless-concat": ["error"],
    "no-return-assign": ["error"],
    "no-continue": ["off"],
    "no-promise-executor-return": ["error"],
    "arrow-parens": ["error", "always"],
    "keyword-spacing": ["error"],
    "no-multi-spaces": ["error"],
    "array-element-newline": ["error", "consistent"],
    "array-bracket-newline": ["error", "consistent"],
    "eol-last": ["error", "always"],
    "multiline-ternary": ["error", "always-multiline"],
    "no-multi-str": ["error"],
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 0, maxBOF: 0 }],
    "no-plusplus": ["error"],
    "no-sequences": ["error"],
  },
  overrides: [
    {
      files: ["./**/*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
      },
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",
      ],
      rules: {
        "indent": "off",
        "@typescript-eslint/indent": ["error", 2],
        "no-extra-parens": "off",
        "@typescript-eslint/no-extra-parens": ["error", "all", {
          nestedBinaryExpressions: false,
          ignoreJSX: "multi-line",
          enforceForArrowConditionals: false,
        }],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error", {
          vars: "all",
          args: "none",
          ignoreRestSiblings: false,
        }],
        "func-call-spacing": "off",
        "@typescript-eslint/func-call-spacing": ["error", "never"],
        "no-dupe-class-members": "off",
        "@typescript-eslint/no-dupe-class-members": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/member-delimiter-style": ["error", {
          multiline: {
            delimiter: "none",
          },
          singleline: {
            delimiter: "comma",
          },
        }],
        "@typescript-eslint/typedef": ["error", {
          arrowParameter: false,
        }],
        "@typescript-eslint/ban-types": ["error"],
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/type-annotation-spacing": ["error"],
        "@typescript-eslint/no-empty-interface": ["error", {
          allowSingleExtends: true,
        }],
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": ["error", { allow: ["constructors", "arrowFunctions"] }],
        "@typescript-eslint/promise-function-async": ["error"],
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "@typescript-eslint/consistent-type-assertions": ["error", { assertionStyle: "as" }],
        "@typescript-eslint/prefer-function-type": ["error"],
      },
    },
  ],
}
