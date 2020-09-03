const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
exports.extratCss = ({ include, exclude, use = [] }) => {
  const plugin = new MiniCssExtractPlugin({
    filename: "./assets/css/[name].css",
    chunkFilename: "[id].css",
  });
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // esModule: true,
                hmr: true,
                reloadAll: true,
              },
            },
          ].concat(use),
        },
      ],
    },
    plugins: [plugin],
  };
};

exports.imgHandler = () => {
  return {
    module: {
      rules: [
        {
          test: /\.png|jpe?g$/,
          use: [
            {
              loader: "image-trace-loader",
            },
            {
              loader: "url-loader",
              options: {
                // limit:18192000,
                // outputPath:'./assets/imgs',
                // // publicPath:'./',
                // name:'[name].[ext]',
                // postTransformPublicPath: (p) => `__webpack_public_path__ + ${p}`
                name: "[name].[contenthash].[ext]",
                outputPath: "static/assets/",
                publicPath: "static/assets/",
                postTransformPublicPath: (p) => {
                  console.log("转换publicpath", p);
                  return `__webpack_public_path__ + ${p}`;
                },
              },
            },
          ],
        },
      ],
    },
  };
};
