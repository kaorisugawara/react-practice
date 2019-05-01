module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: ["plugin:vue/essential", "@vue/prettier"],
    rules: {
      "no-console":
        process.env.NODE_ENV === "production"
          ? [
              "error",
              {
                allow: ["warn", "error"]
              }
            ]
          : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-fallthrough": "off",
      "no-useless-escape": "off",
      "no-irregular-whitespace": [
        "error",
        {
          skipStrings: true,
          skipComments: true
        }
      ],
      "space-before-function-paren": ["off", "always"],
      "no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true
        }
      ]
    },
    globals: {
      $: true,
      Vue: true,
      Vuex: true,
      Grid: true,
      moment: true,
      hljs: true,
      fw: true
    },
    parserOptions: {
      parser: "babel-eslint"
    }
  };