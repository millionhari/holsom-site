const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry : "./src/index.js",
  module: {
    rules: [
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [
        'img-loader'
        ]
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    },
   ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/images", to: "images" }
      ],
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    fallback: { "querystring": require.resolve("querystring-es3") },
  },
  output : {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer: {
    // Serve index.html as the base
    contentBase: path.join(__dirname, 'dist'),

    // Enable compression
    compress: true,

    // Enable hot reloading
    hot: true,

    host: 'localhost',

    port: 3000,

    // Public path is root of content base
    publicPath: '/',

  }
}