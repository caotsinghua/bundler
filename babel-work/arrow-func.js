// import 'core-js'
// import 'regenerator-runtime/runtime'
class Foo {
    constructor(){
      this.a = Array.from([1,2,3])
      this.foo = ()=>{
        console.log("fo0o")
      }
      this.b = [1,2,3].includes(3)
    }

    async funcAsync(){
      await console.log(1)
    }
  
    func(){
      console.log("func")
      return new  Promise((resolve,reject)=>{
          resolve(1)
      })
    }
  }
  export default Foo;
  