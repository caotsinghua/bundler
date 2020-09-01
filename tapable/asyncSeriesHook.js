const {AsyncSeriesHook} = require('tapable')

const hook = new AsyncSeriesHook(['name'])

hook.tap('first',(name)=>{
    console.log("first",name)
})

hook.tapAsync('second-async',(name,callback)=>{
    console.log('second',name)
    callback()
})

hook.tapPromise('third-promise',(name)=>{
    console.log('third-promise',name)
    return Promise.resolve()
})

hook.tap("fourth",(name)=>{
    console.log("--fourth--",name)

})
// hook.call('cesi1')
// hook.callAsync("aaa")
hook.promise('hello').then(r=>{
    console.log(r)
})