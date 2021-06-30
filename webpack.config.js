const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    library: {
      name: 'VuePlugin',
      type: 'umd',
      export: ['default']
    },
  },
  externals: {
    "@easylogic/editor": "@easylogic/editor",
    "vue": "vue",
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
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['*.LICENSE.txt'],
    }),
  ],
}
