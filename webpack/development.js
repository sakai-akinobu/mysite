const path = require('path');

const shared = require('./shared');

module.exports = Object.assign({}, shared, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/dist/',
    contentBase: path.join(__dirname, '../public'),
    watchContentBase: true,
  },
});
