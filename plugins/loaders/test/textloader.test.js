import compiler from './compiler'

test('inserts name and output js',async ()=>{
    const stats = await compiler('example.txt',{
        replaceValue:'替换的值'
    })
    const output = stats.toJson().modules[0].source
    console.log(output)
    expect(output).toBe(`export const str = \`这是一段测试文字
    替换：替换的值：完成
    \``)
})