const fs = require("fs");
const parser = require("@babel/parser");
const path = require("path");
const traverse = require("@babel/traverse").default;
const { transformFromAst, transformFromAstSync } = require("@babel/core");

const Parser = {
  getAst(path) {
    console.log("--- getAst ---");
    // 读取入口文件
    const content = fs.readFileSync(path, {
      encoding: "utf-8",
    });
    console.log(" --- origin content ---");
    console.log("filename:" + path);
    console.log("content:", content);
    return parser.parse(content, {
      sourceType: "module",
    });
  },
  //   找到所有模块
  getDependencies(ast, filename) {
    const dependencies = {};
    // 从ast树开始深度遍历
    traverse(ast, {
      // 类型是ImportDeclaration，说明是import语句
      ImportDeclaration({ node }) {
        console.log(" --- 遍历import ---");
        console.log(node);
        const dirname = path.dirname(filename); // 获取文件的目录命

        const filepath = path.join(dirname, node.source.value);

        // 保存依赖模块路径
        dependencies[node.source.value] = filepath;
      },
      // FunctionDeclaration(n){
      //   console.log("-- function --")
      //   console.log(n.node.id.name)
      // }
    });
    return dependencies;
  },
  // 把ast语法树转换成代码
  getCode(ast) {
    const { code } = transformFromAstSync(ast, null, {
      presets: ["@babel/preset-env"],
    });
    return code;
  },
};

module.exports = {
  Parser,
};
