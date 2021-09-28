const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/dev-index.js'),
    player: path.resolve(__dirname, './src/dev-player.js'),
  },
  output: {    
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs/'),
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      // JavaScript
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['*.LICENSE.txt'],
    }),
    new HtmlWebpackPlugin({
      title: 'EasyLogic Studio - Fantastic Web Design Tool',
      template: path.resolve(__dirname, './src/index.html'), // template file
      filename: 'index.html', // output file
      excludeChunks: ['player']      
    }),    

    new HtmlWebpackPlugin({
      title: 'EasyLogic Studio - Fantastic Web Design Tool',
      template: path.resolve(__dirname, './src/index.html'), // template file
      filename: 'player.html', // output file,
      excludeChunks: ['index']
    }),        
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
}
