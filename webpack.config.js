var baseDir = __dirname + '/chucksfantasyfootball/static/js';

module.exports = {
  context: baseDir + '/src',
  entry: {
    index: './index.js',
  },
  output: {
    path: baseDir + '/dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};