const {AsyncSeriesHook} = require('tapable')

const hook = new AsyncSeriesHook(['name'])

hook.tapAsync('first',(name,callback)=>{
    console.log("trigger first",name,callback)
    callback(false)
})

hook.tapAsync('second',(name,callback)=>{
    console.log("--- triiger second",name,callback)
    callback("second error","second result")
})
hook.tapAsync('third',(name,callback)=>{
    console.log("--- trigger third",{name})
    callback()
})

hook.callAsync('callasync',(error,data)=>{
    console.log("call callback",{error,data})
})