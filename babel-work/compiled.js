"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _from = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/from"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

// import 'core-js'
// import 'regenerator-runtime/runtime'
var Foo = /*#__PURE__*/function () {
  function Foo() {
    var _context;

    (0, _classCallCheck2["default"])(this, Foo);
    this.a = (0, _from["default"])([1, 2, 3]);

    this.foo = function () {
      console.log("fo0o");
    };

    this.b = (0, _includes["default"])(_context = [1, 2, 3]).call(_context, 3);
  }

  (0, _createClass2["default"])(Foo, [{
    key: "funcAsync",
    value: function () {
      var _funcAsync = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return console.log(1);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee);
      }));

      function funcAsync() {
        return _funcAsync.apply(this, arguments);
      }

      return funcAsync;
    }()
  }, {
    key: "func",
    value: function func() {
      console.log("func");
      return new _promise["default"](function (resolve, reject) {
        resolve(1);
      });
    }
  }]);
  return Foo;
}();

var _default = Foo;
exports["default"] = _default;
