const path = require("path");
const { merge } = require("webpack-merge");
const parts = require("./webpack.part");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const base = {
  context: __dirname,
  entry: {
    "style-entry": "./style-entry.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundler.js",
  },
  module: {
    rules: [
        {
            test:/\.js$/,
            use:['babel-loader']
        }
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    compress: true,
    port: 9000,
    hot: true,
  },
  plugins: [
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "HtmlWebpackPlugin-page",
      chunks: ["style-entry"],
      template: path.resolve(__dirname, "./style-entry.html"),
    }),
  ],
  devtool: "inline-cheap-module-source-map",
};

const cssUse = [
  "style-loader",
  {
    loader: "css-loader",
    options: {
      url(url, resourcePath) {
        console.log({ resourcePath });
        if (url[0] === "/") {
          return false;
        }
        return true;
      },
      import: (url, media, resourcePath) => {
        // resourcePath - path to css file

        // Don't handle `style.css` import
        if (url[0] === "/") {
          return false;
        }

        return true;
      },
      //   importLoaders: 1,
    },
  },
  //   {
  //     loader: "postcss-loader",
  //     options: {
  //       plugins: [require("autoprefixer")],
  //     },
  //   },
];

const result = merge(
  base,
  //   {
  //       module:{
  //           rules:[
  //               {
  //                   test:/\.css$/,
  //                   use:cssUse
  //               }
  //           ]
  //       }
  //   }
  parts.extratCss({
    use: cssUse.slice(1),
  }),
  parts.imgHandler()
);
console.log(result.module.rules);

module.exports = result;
