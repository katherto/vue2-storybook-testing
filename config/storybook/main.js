const WindiCSS = require("windicss-webpack-plugin").default;

module.exports = {
  stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-links"],
  webpackFinal: (config) => {
    config.plugins.push(new WindiCSS());

    return config;
  },
};
