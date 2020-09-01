const {AsyncParallelHook,AsyncSeriesHook} = require("tapable")

const hook = new AsyncParallelHook(['name'])

hook.tap("first",()=>{
    console.log("<run first/>")
})

hook.tapAsync('second',(name,callback)=>{
    setTimeout(()=>{
        console.log("<run second/>")
        callback()
    },2000)
})

hook.tapPromise("third",()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("<run third/>")
            // resolve()   
            reject("错误")
        },2000)
    })
})
hook.tapPromise("fotrh",()=>{
    console.log("<run forth/>")
    return Promise.resolve()
})
hook.callAsync("callasync",(err)=>{
    console.log("最终错误",err)
})

// hook.promise("hel")