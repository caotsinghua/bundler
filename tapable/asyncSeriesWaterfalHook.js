const {AsyncSeriesWaterfallHook} = require('tapable')

const hook = new AsyncSeriesWaterfallHook(['name'])

hook.tap('first',name=>{
    console.log("trigger first",name)
})

hook.tapAsync('second',(name,callback)=>{
    console.log("trigger second",name)
    // callback(undefined,'下一轮的值-from second')
    // 如果callback继续下去，如果当前传值，就用当前值
    // 如果当前undefined，就用上次传归来得到值
    callback()
})

hook.tapPromise("third",(name)=>{
    console.log("third",name)
    return Promise.resolve()
    // return Promise.reject("1")
})

hook.tap("forth",(name)=>{
    console.log("forth")
})

hook.tapAsync("fifth",(name,cb)=>{
    console.log("fifth","promise被async接受到",name)
    cb(undefined,'end value')
})

// hook.call()
hook.callAsync("call async",(error,res)=>{
    console.log("最终结果",res)
})