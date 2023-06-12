module.exports = {
  root: true,
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
    ecmaVersion: 2018,
    sourceType: "module",
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: [],
  rules: {
    "react/prop-types": 0,
    "react/display-name": 0,
    "react/react-in-jsx-scope": 0,
    "no-unused-vars": 0,
    eqeqeq: 2,
  },
};
