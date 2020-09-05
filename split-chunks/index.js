import Home from "./Home";
import Mine from "./Mine";
// import * as Utils from './utils'
import './common.css'
const View1Async = () => import("./view1Async");
const View2Async = () => import("./view2Async");

function render(view) {
  view();
  // console.log(Utils)
}

render(Home);

setTimeout(() => {
  render(View1Async);
  render(View2Async);
}, 10000);
