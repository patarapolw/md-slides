const path = require("path");
const webpack = require("webpack");
const dree = require("dree");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      DREE: JSON.stringify(dree.scan("slides"))
    }),
    new CopyWebpackPlugin([
      "./public"
    ])
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].min.js"
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      ".ts",
      ".js"
    ]
  },
  entry: {
    index: "./src/index.ts"
  }
}