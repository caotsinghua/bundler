const { SyncLoopHook } = require("tapable");

const hook = new SyncLoopHook(["name"]);

const indent_space = 4;
let firstcount = 0,
  secondCount = 0,
  thirdCount = 0,
  indent = 0;

function indentLog(...text) {
  console.log(new Array(text).join(" "), indent);
}
hook.tap('first',name=>{
    if(firstcount === 1){
        firstcount =0
        indent -= indent_space
        indentLog("</callback-first>")
        return
    }
    firstcount++
    indentLog("<callback-first>")
    indent+=indent_space
    return true
})

hook.tap("second",name=>{
    if(secondCount == 1){
        secondCount =0
        indent -= indent_space
        indentLog("</callback-second>")
        return
    }
    secondCount++
    indentLog("<callback-second>")
    indent+=indent_space
    return true
})

hook.tap("third",name=>{
    if(thirdCount == 1){
        thirdCount =0
        indent -= indent_space
        indentLog("</callback-third>")
        return
    }
    thirdCount++
    indentLog("<callback-third>")
    indent+=indent_space
    return true
})
hook.call("测试loop")

