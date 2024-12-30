import unjs from "eslint-config-unjs";

export default unjs({
  ignores: [],
  rules: {
    "unicorn/prevent-abbreviations": "off",
    "unicorn/no-null": "off",
    "unicorn/no-nested-ternary": "off",
    "@typescript-eslint/no-require-imports": "off",
    "unicorn/no-array-reduce": "off",
  },
  markdown: {
    rules: {},
  },
});
