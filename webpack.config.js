"use strict";

const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "filters.min.js",
    path: path.resolve(__dirname, "dist"),
    library: "piiiFilters",
    libraryTarget: "umd"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
