/* eslint-disable no-undef */
/** @type {import('eslint').Linter.Config[]} */
const globals = require("globals"); // Assuming you have the 'eslint-plugin-browser' installed
const pluginJs = require("@eslint/js"); // Ensure this is installed and imported correctly
const pluginReact = require("eslint-plugin-react"); // Ensure this is installed and imported correctly

module.exports = [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
  },
  {
    languageOptions: {
      globals: globals.browser, // Use the globals from the plugin
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
