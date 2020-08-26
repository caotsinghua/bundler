const { Parser } = require("./Parser");
class Compiler {
  constructor(options) {
    this.$options = options;
    const { entry, output } = options;
    this._entry = entry;
    this._output = output;
    this._modules = [];
  }
  // -- 启动构建
  run() {
    console.log("--- run - start ---");
    const ast = Parser.getAst(this._entry);
    console.log(" --- ast 树 ---", ast);
    console.log("--- 获取依赖---")
    const dependencies = Parser.getDependencies(ast,this._entry)
    console.log({dependencies})
  }

  //   ?
  generate() {}
}

module.exports = Compiler