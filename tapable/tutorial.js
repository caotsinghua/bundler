/**
 * 简单使用tapable的方式
 */

const { SyncHook } = require("tapable");

const hook1 = new SyncHook(["arg1", "arg2", "arg3"]);
// 绑定事件
hook1.tap("hook2", (arg1, arg2, arg3,...others) => {
  console.log(" --- 执行hook1 ---");
  console.log({
    arg1,
    arg2,
    arg3,
    others
  });
});
hook1.tap('hook1',()=>{
    console.log("--- 执行22")
})

hook1.call(1, 2, 3);
