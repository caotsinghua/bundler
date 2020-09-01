const { SyncHook } = require("tapable");

const hook = new SyncHook(["name"]);

hook.intercept({
  context: true,
  register(tap) {
    console.log("--- regiester.注册时执行", tap);
    return tap;
  },
  call(...args) {
    args[0].ctxname = 123;
    console.log("触发事件的时候执行,call", args);
  },
  loop(...args) {
    console.log("在call拦截器后执行，loop", args);
  },
  tap(context, tap) {
    console.log("--- tap,在回调执行前执行", context, tap);
  },
});

hook.tap(
  {
    name: "first",
    context: true,
  },
  (ctx, name) => {
    console.log("触发fist", {
      ctx,
      name,
    });
  }
);
// hook.tap("first2",(name)=>{
//     console.log("触发fist22",name)
// })
hook.call("name11");
