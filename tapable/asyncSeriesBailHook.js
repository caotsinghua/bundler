const {AsyncSeriesBailHook} = require('tapable')

const hook = new AsyncSeriesBailHook(['name'])

hook.tap("first",(name)=>{
    console.log("--trigger first--",name)
})

hook.tapAsync("second",(name,callback)=>{
    console.log("--trigger second",name)
    // return '1s'
    // 有值会短路
    callback(null,undefined)
})
hook.tapPromise("promise third",(name,callback)=>{
    console.log('111')
    console.log("--- promise third ---",name)
    return Promise.resolve(undefined)
})
hook.tapPromise('fff',(name,callback)=>{
    console.log("run fff")
    return Promise.resolve(name)
})
// hook.tap("fourth",(name)=>{
//     console.log("trigger fouth",name)
// })
// hook.call("ces")
console.log(hook.callAsync("call async",(err,res)=>{
    console.log("触发最终cb",res)
}))
// hook.promise('ceshi')