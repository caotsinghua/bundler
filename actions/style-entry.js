import "./publicpath";
import "./css/main.css";
import logo from "./css/cat.png";

console.log({
  logo,
});
console.log(logo);
const img = document.getElementById("img");
img.setAttribute("src", logo.trace);
img.style.transition = "all .2s";
setTimeout(() => {
  img.setAttribute("src", logo.src);
}, 1000);
console.log(2);

Promise.resolve("asd").then((res) => {
  console.log(res);
});
