const { AsyncSeriesHook } = require("tapable");

const hook = new AsyncSeriesHook(["name"]);
hook.tapPromise("first", (name) => {
  console.log("--- trigger first", { name });
  return Promise.resolve("first");
});

// hook.call()
hook.tapPromise("second", (name) => {
  console.log("--- trigger second", { name });
  return Promise.resolve("second");
});

const promise = hook.promise("proooomise");
console.log(promise);
promise.then(
  (value) => {
    //   resonve ,value是undefined
    console.log("then value is:", value);
  },
  (reason) => {
    //   reject 会有reason
    console.log("reject reson:", reason);
  }
);
