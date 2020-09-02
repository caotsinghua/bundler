const assert = require("assert");
const fs = require("fs");
// const glob = require("util").promisify(require("glob"))

class UploadPlugin {
  constructor(options) {
    // assert(options,"check options")
  }
  apply(compiler) {
    // 事件回调参数的第一个是compilation,
    // 即每次callAsync,都是call(compilation)
    compiler.hooks.afterEmit.tapAsync(
      "UploadPlugin",
      (compilation, callback) => {
        const {
          outputOptions: { path: outputPath },
        } = compilation;
        console.log("===输出文件路径===",outputPath);
        // assert(outputPath, "输出文件路径");
        callback();
      }
    );
  }
}

module.exports = UploadPlugin;
