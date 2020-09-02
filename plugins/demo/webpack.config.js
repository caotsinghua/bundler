const path = require("path");
const UploadPlugin = require("../plugins/UploadPlugin");
const FileListPlugin = require("../plugins/FileListPlugin");
module.exports = {
  entry: {
    main: "./index.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [new UploadPlugin(), new FileListPlugin()],
};
