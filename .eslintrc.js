module.exports = {
    "extends": ["airbnb", "plugin:react-native/all"],
    "plugins": ["react-native"],
    "parser": "babel-eslint",
    "env": {
      "jest": true,
    },
    "globals": {
      "by": true,
      "expect": true,
      "device": true,
      "element": true,
      "fetch": true,
    },
    "rules": {
      "semi": ["error", "never"],
      "react/forbid-prop-types": "off",
      "no-confusing-arrow": ["off"],
      "padded-blocks": ["error", { "classes": "always" }],
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" }
      ],
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-noninteractive-element-interactions": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "arrow-body-style": "off",
      "import/no-extraneous-dependencies": "off",
      "no-underscore-dangle": "off",
      "no-unused-expressions": ["error", { "allowShortCircuit": true }],
      "class-methods-use-this": "off",
      "react/prefer-stateless-function": "off",
      "object-curly-newline": "off",
      "react/jsx-filename-extension": "off",
      "import/first": "off",
      "react/jsx-one-expression-per-line": "off",
      "import/no-useless-path-segments": "off",
      "import/order": "off",
      "react/react-in-jsx-scope": "off",
    },
    "settings": {
      "import/resolver": {
        "babel-module": {
          "alias": {
            "components": "./src/components",
            "containers": "./src/containers",
            "core": "./src/core",
            "services": "./src/services",
            "store": "./src/store",
          }
        }
      }
    }
}