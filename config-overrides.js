/* config-overrides.js */
const webpack = require('webpack');
module.exports = function override(config, env) {
  //do stuff with the webpack config...
  if (env === 'development') {
    const babelLoaderConfig = config.module.rules[1].oneOf[2];
    babelLoaderConfig.options.plugins.push('@codesee/instrument');
  }
  return config;
};
