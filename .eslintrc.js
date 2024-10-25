module.exports = {
  root: true,
  extends: "@react-native",
  rules: {
    quotes: ["error", "double"],
    "jsx-quotes": ["error", "prefer-double"],
    "react-hooks/exhaustive-deps": "off",
    "react-native/no-inline-styles": "off",
    curly: "off",
    radix: "off",
    "@typescript-eslint/no-shadow": "off",
    "react-hooks/rules-of-hooks": "off",
    "react/no-unstable-nested-components": "off",
  },
};
