import { commonData } from "./common";
export const sum = function (arr) {
  console.log(commonData);
  return Array.from(arr).reduce((a, b) => a + b, 0);
};
