const webpack = require("webpack");
const path = require("path");
module.exports = {
  entry: {
    main: path.resolve(__dirname, "index.js"),
  },
  output:{
      path:path.resolve(__dirname,'dist'),
      filename:'bundle.js'
  },
  plugins:[
      new webpack.DefinePlugin({
        NAME:JSON.stringify("DEFINED_NAME"),
        DEFINED_NAME:JSON.stringify("DEFINED_NAME"),
        Array:JSON.stringify("Array")
      })
  ],
  devtool:'inline-source-map'
};
