"use strict";
const NodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./main.js",
  output: {
    filename: "scripts.js",
    path: "./"
  },
  resolve: {
    extensions: ["", ".js"]
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader?presets[]=es2015"}
    ]
  },
  devtool: "source-map"
};
