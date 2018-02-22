const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/assets')
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/assets/',
    port: 8080,
    watchContentBase: true
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [require('@babel/plugin-proposal-object-rest-spread')]
          }
        }
      }
    ]
  },

  plugins: []
}
