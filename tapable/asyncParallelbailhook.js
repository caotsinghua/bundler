const {AsyncParallelBailHook} = require("tapable")

const hook = new AsyncParallelBailHook(['name'])

hook.tap("first",()=>{
    console.log("<run first/>")
    // return 'forst'
})
// 返回值取决于哪个最先有返回值的逻辑
// 即同时运行，返回值是定义在前面的回调的，则就是最终值
// 如果这个值先执行玩，那么最后的callasync也执行
// 否则，如果定义在前面的带返回值的函数，最后才执行，那么callasync的回调在这个最后的返回值产生的时候才执行
hook.tapAsync("second",(name,callback)=>{
    setTimeout(()=>{
        console.log("<run second/>")
        callback(undefined,'second 返回值')
    },2000)
})
hook.tapAsync("second22",(name,callback)=>{
    setTimeout(()=>{
        console.log("<run second22/>")
        callback(undefined,'second222 返回值')
    },1000)
})
hook.tapPromise("third",()=>{
    console.log("<run third/>")
    return Promise.resolve("end")
})

hook.callAsync("ttt",(err,data)=>{
    console.log("最终结果")
    console.log({
        err,data
    })
})