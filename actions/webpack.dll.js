const webpack = require("webpack");
const path = require("path");
module.exports = {
  entry: {
    react_vendors: ["react", "react-dom"],
  },
  resolve: {
    modules: [path.resolve(__dirname, "../node_modules")],
  },
  output: {
    filename: "[name].dll.js",
    path: path.resolve(__dirname, "./dlls"),
    library: "react_vendor",
  },
  plugins: [
    new webpack.DllPlugin({
      context: path.resolve(__dirname, "../actions"),
      name: "react_vendor",
      path: path.resolve(__dirname, "./dlls/manifest.json"),
    }),
  ],
};
