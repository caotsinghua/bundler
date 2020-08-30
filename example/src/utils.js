import { commonData } from "./common.js";
export const sum = function (arr) {
  // console.log(commonData);
  return Array.from(arr).reduce((a, b) => a + b, 0);
};
