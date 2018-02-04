"use strict";

const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "piii-filters.js",
    path: path.resolve(__dirname, "dist"),
    library: "piiiFilters",
    libraryTarget: "umd"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
