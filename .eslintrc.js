module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": [0], // 开启会影响 dev 环境打包速度
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "spaced-comment": [2], // 注释风格要有空格
    "no-sparse-arrays": [2], // 禁止稀疏数组 [1,,2]
    "vue/eqeqeq": [0],
    "vue/no-v-html": [0],
    "vue/this-in-template": [0],
    "vue/attribute-hyphenation": [0],
    "vue/require-default-prop": [0],
    "vue/require-prop-types": [0],
    "vue/require-valid-default-prop": [0],
    "vue/no-unused-vars": [0],
    "vue/prop-name-casing": [0],
    "vue/name-property-casing": [0],
    "vue/component-name-in-template-casing": [0],
    "vue/no-unused-components": [0],
    "vue/no-duplicate-attributes": [0],
  },
};
