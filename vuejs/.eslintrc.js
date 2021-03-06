module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/airbnb", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
        vue: "never"
      }
    ],
    "comma-dangle": ["error", "never"]
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
