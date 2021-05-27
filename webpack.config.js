const path = require("path");
const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const HTMLWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
/**
 * [name]
 * [hash]
 * [id]
 * [contenthash]
 * [chunkhash]
 * [query]
 */
module.exports = {
  mode: "development",
  entry: "./src/engine.tsx",
  resolve: {
    extensions: [".ts", ".tsx",".js", ".jsx",".scss"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[hash].js",
    publicPath: "/assets/",
  },
  devServer: {
    port: 1111,
    contentBase: path.resolve(__dirname, "dist"),
    writeToDisk: true,
  },
  plugins: [
    new HtmlPlugin({
      title: "My RRRRR",
      template: "./dist/template.html",
      filename: "./index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: "/node_modules/",
        loader: "awesome-typescript-loader",
      },
      {
        test: /\.jsx$/,
        exclude: "/node_modules/",
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        exclude: "/node_modules/",
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        exclude: "/node_modules/",
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
