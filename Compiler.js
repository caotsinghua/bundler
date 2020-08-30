const { Parser } = require("./Parser");
const path = require("path");
const fs = require("fs");
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
    //  深度遍历
    const entryInfo = this.build(this._entry,this._entry);
    if (!entryInfo) {
      console.log(" run -- 没有entry信息");
      return;
    }
    const visited = new Set();
    // 深度
    const stack = [entryInfo];
    visited.add(entryInfo.filename); // init
    while (stack.length) {
      const mod = stack.pop();
      this._modules.push(mod);
      const { dependencies } = mod;
      if (dependencies) {
        for (let depImportName in dependencies) {
          if (!visited.has(dependencies[depImportName])) {
            stack.push(this.build(dependencies[depImportName],depImportName));
          }
        }
      }
    }

    const dependencyGraph = this._modules.reduce((graph, item) => {
      return {
        ...graph,
        [item.importName]: {
          dependencies: item.dependencies,
          code: item.code,
          filename:item.filename
        },
      };
    }, {});
    console.log("--- 生成的依赖图 ---");
    console.log(dependencyGraph);
    this.generate(dependencyGraph);
  }

  // 编译一个模块
  build(filename,importName) {
    const ast = Parser.getAst(filename);
    const dependencies = Parser.getDependencies(ast, filename);
    const code = Parser.getCode(ast);
    return {
      filename,
      importName,
      dependencies,
      code,
    };
  }

  //   重写require方法，输出bundle
  generate(graph) {
    const distPath = path.join(this._output.path, this._output.filename);
    const bundle = `
    (function (graph) {
      function require(moduleId) {
        
        var exports = {};
        ;(function (require, exports, code) {
          eval(code);
        })(require, exports, graph[moduleId].code);
        return exports
      }
      require(${JSON.stringify(this._entry)});
    })(${JSON.stringify(graph)});
    `;

    const outputDir = path.dirname(distPath);
    const res = fs.mkdirSync(outputDir, {
      recursive: true,
    });
    console.log("创建目录", res);
    fs.writeFileSync(distPath, bundle, {
      encoding: "utf-8",
      flag: "w",
    });
  }
}

module.exports = Compiler;
