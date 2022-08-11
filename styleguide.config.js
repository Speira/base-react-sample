const path = require('path')

module.exports = {
  components: 'src/components/*.js',
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
    return componentPath.replace(/components\/(.+).js/g, (matching, p1) => {
      return `components/__docs__/${p1}.doc.md`
    })
  },
}
