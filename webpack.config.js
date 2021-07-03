const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    library: {
      name: 'ColorAssetPlugin',
      type: 'umd',
      export: ['default']
    },
  },
  externals: {
    "@easylogic/editor": "@easylogic/editor",
    "@easylogic/color": "@easylogic/color"
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
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
}
