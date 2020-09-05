const webpack = require("webpack");
const path = require("path");
module.exports = {
  entry: path.resolve(__dirname, "./index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [
    // new webpack.IgnorePlugin({
    //   resourceRegExp: /^\.\/locale$/,
    //   contextRegExp: /moment$/,
    // }),
  ],
};
