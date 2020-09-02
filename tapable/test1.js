const { AsyncSeriesHook } = require("tapable");

const hook = new AsyncSeriesHook(["compilation"]);

hook.tapAsync("plugin1", (compilation, cb) => {
  console.log("执行plugin1", { compilation });
  cb(undefined,'asdd');
});

hook.tapAsync("plugin2", (compilation, cb) => {
  console.log("执行plugin2", { compilation });
  cb(undefined,'okoko');
});

hook.callAsync("参数",(err,data)=>{
    console.log({
        err,data
    })
})