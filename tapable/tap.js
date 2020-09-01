const {SyncHook} = require('tapable')

const hook = new SyncHook()

hook.tap({
    name:'first',
    before:'second' // 要先声明了second才行
},()=>{
    console.log('first')
})

hook.tap({
    name:'second',
    stage:-1 // 顺序提前
},()=>{
    console.log("触发second")
})

hook.tap({
    name:'third',
    // before:'second', // 放到second前执行
},()=>{
    console.log("-- trigger third --")
})
// hook.call()
// hook.callAsync()
// hook.promise()