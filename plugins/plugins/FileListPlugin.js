function FileListPlugin(options) {}
FileListPlugin.prototype.apply = function (compiler) {
  compiler.plugin("emit", (compilation, cb) => {
    let filelist = "in this build: \n\n";
    for (let name in compilation.assets) {
      filelist += `- ${name} \n`;
    }
    compilation.assets["filelist.md"] = {
      source() {
        return filelist;
      },
      size() {
        return filelist.length;
      },
    };
    cb();
  });
};

module.exports = FileListPlugin;
