const path = require('path')

module.exports = {
  components: 'src/components/**/index.js',
  webpackConfig: require('./config/webpack.config.js'),
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      ],
    },
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/contexts'),
  },
  getExampleFilename(componentPath) {
    // src/components/Alert/index.js
    return componentPath.replace(/\.jsx?$/, '.examples.md')
  },
}
