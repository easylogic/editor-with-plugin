const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/dev-index.js'),
    player: path.resolve(__dirname, './src/dev-player.js'),    
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },      
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },      
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'editor with plugin',
      template: path.resolve(__dirname, './src/index.html'), // template file
      filename: 'index.html', // output file,
      excludeChunks: ['player']
    }),
    new HtmlWebpackPlugin({
      title: 'player with plugin',
      template: path.resolve(__dirname, './src/index.html'), // template file
      filename: 'player.html', // output file
      excludeChunks: ['index']
    }),    
    new webpack.HotModuleReplacementPlugin(),
  ],
}
