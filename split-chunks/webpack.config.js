const path = require("path");
const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const ExtractCssPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
module.exports = {
  mode: "development",
  entry: {
    main:path.resolve(__dirname, "./index.js"),
    'sub-entry':path.resolve(__dirname, "./entry2.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    chunkLoadTimeout: 30000, // 请求过期前时间
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ExtractCssPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: "runtime",
    },
    splitChunks: {
      chunks: "async",
      minSize: 2,
      //   minRemainingSize: 0,
      //   maxSize: 10,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: "~",
      enforceSizeThreshold: 50000,
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          enforce: true,
          chunks: "initial",
        },
        initialChunks: {
          minChunks: 2,
          minSize:5,
          priority: -20,
          maxSize: 20000,
          reuseExistingChunk: true,
          chunks: "initial",
        },
      },
    },
  },
  plugins: [
    new HtmlPlugin(),
    new ExtractCssPlugin({
      filename: "[name].[contenthash].css",
    }),
    new BundleAnalyzerPlugin({
      //  可以是`server`，`static`或`disabled`。
      //  在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
      //  在“静态”模式下，会生成带有报告的单个HTML文件。
      //  在`disabled`模式下，你可以使用这个插件来将`generateStatsFile`设置为`true`来生成Webpack Stats JSON文件。
      analyzerMode: "server",
      //  将在“服务器”模式下使用的端口启动HTTP服务器。
      analyzerPort: 9999,
    }),
  ],
  devtool: "inline-cheap-source-map",
};
