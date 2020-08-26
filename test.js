const fs = require("fs");
const path = require("path");

const config = require("./example/bundler.config");
const Compiler = require('./Compiler')
// console.log(config);

const compiler = new Compiler(config)
compiler.run()