const path = require('path');

module.exports = async ({ config, mode }) => {
    // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
  
    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.pug$/,
      use: ['raw-loader'],
    });
    config.module.rules.push({
      test: /\.ts$/,
      use: ['babel-loader'],
    });
    // config.module.rules.push({
    //   test: /\.css$/,
    //   use: ['style-loader', 'css-loader'],
    // });
  

    config.resolve.extensions.push('.ts');
  
    // Return the altered config
    return config;
  };