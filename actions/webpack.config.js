const path = require("path");
const { merge } = require("webpack-merge");
const parts = require("./webpack.part");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var DashboardPlugin = require("webpack-dashboard/plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const HappyPack = require("happypack");
const os = require("os");
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const smp = new SpeedMeasurePlugin();
const base = {
  context: path.resolve(__dirname, "../actions"),
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
        test: /\.js$/,
        use: [
          // {
          //   loader: "babel-loader",
          //   options: {
          //     cacheDirectory: true,
          //   },
          // },
          {
            loader: "happypack/loader",
            options: {
              id: "babel",
            },
          },
        ],
      },
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
    // new webpack.DllReferencePlugin({
    //   manifest:require('./dlls/manifest.json'),
    //   context:path.resolve(__dirname,'../actions'),
    //   // scope:'beta'
    // }),
    new HardSourceWebpackPlugin({
      cachePrune: {
        // Caches younger than `maxAge` are not considered for deletion. They must
        // be at least this (default: 2 days) old in milliseconds.
        maxAge: 2 * 24 * 60 * 60 * 1000,
        // All caches together must be larger than `sizeThreshold` before any
        // caches will be deleted. Together they must be at least this
        // (default: 50 MB) big in bytes.
        sizeThreshold: 50 * 1024 * 1024,
      },
    }),
    new HtmlWebpackPlugin({
      title: "HtmlWebpackPlugin-page",
      chunks: ["style-entry"],
      template: path.resolve(__dirname, "./style-entry.html"),
    }),
    new HappyPack({
      // 用 ID 来标识 happupack 处理相关 loader
      id: "babel",
      // 如何处理  用法和 loader 的配置一样
      loaders: [
        {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      ],
      // 共享进程池
      threadPool: happyThreadPool,
      // 允许 HappyPack 输出日志
      verbose: true,
      debug: true,
    }),
    // new DashboardPlugin(),
  ],
  // devtool: "inline-cheap-module-source-map",
  // stats: "verbose",
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

module.exports = smp.wrap(result);
