const path = require('path');

module.exports = {
  components: 'src/components/**/index.js',
  webpackConfig: require('./config/webpack.config.js'),
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/contexts'),
  },
};
