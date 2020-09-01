const {SyncHook} = require('tapable')

const hook = new SyncHook(['name',])

hook.tap('fitst',(name,other)=>{
    console.log("triiger fist",{
        name,
        other
    })
})

// hook.call('名称','参数2') // 第二个参数不起作用，因为没有声明
// hook.callAsync('名称',(e)=>{
//     console.log("回调")
//     console.log(e)
// })
// 报错，第二个参数不是函数
// hook.callAsync('吗','22',(e)=>{
//     console.log("回到篇")
// })