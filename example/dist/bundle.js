
    (function (graph) {
      function require(moduleId) {
        
        var exports = {};
        ;(function (require, exports, code) {
          eval(code);
        })(require, exports, graph[moduleId].code);
        return exports
      }
      require("C:\\codes\\webpack\\bundler\\example\\src\\index.js");
    })({"C:\\codes\\webpack\\bundler\\example\\src\\index.js":{"dependencies":{"./utils.js":"C:\\codes\\webpack\\bundler\\example\\src\\utils.js"},"code":"\"use strict\";\n\nvar _utils = require(\"./utils.js\");\n\nvar foo = function foo() {\n  console.log(\"-- foo --\");\n  console.log((0, _utils.sum)([1, 2, 3]));\n};\n\nfunction hello() {}\n\nfoo();","filename":"C:\\codes\\webpack\\bundler\\example\\src\\index.js"},"./utils.js":{"dependencies":{"./common.js":"C:\\codes\\webpack\\bundler\\example\\src\\common.js"},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.sum = void 0;\n\nvar _common = require(\"./common.js\");\n\nvar sum = function sum(arr) {\n  // console.log(commonData);\n  return Array.from(arr).reduce(function (a, b) {\n    return a + b;\n  }, 0);\n};\n\nexports.sum = sum;","filename":"C:\\codes\\webpack\\bundler\\example\\src\\utils.js"},"./common.js":{"dependencies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.commonData = void 0;\nvar commonData = {};\nexports.commonData = commonData;","filename":"C:\\codes\\webpack\\bundler\\example\\src\\common.js"}});
    