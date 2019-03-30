const path = require('path');

const shared = require('./shared');

module.exports = Object.assign({}, shared, {
  mode: 'development',
  entry: './src/scripts/prerender/index.tsx',
  output: {
    filename: 'prerender.js',
    path: path.resolve(__dirname, '../tmp'),
  },
});
