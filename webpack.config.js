const path = require('path');

module.exports = {
  mode: "development",

  target: 'node',
  entry: {
    'dist/client': './web/main.ts',
  },
  output: {
    path: path.resolve(__dirname, 'web'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.resolve(__dirname, 'web'), 'node_modules']
  }
};
