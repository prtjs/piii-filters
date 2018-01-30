"use strict";

const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "filters.js",
    path: path.resolve(__dirname, "dist"),
    library: "piiiFilters",
    libraryTarget: "umd"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
