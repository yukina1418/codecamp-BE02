import { HyCheck, numlength } from "./Check.js";

function out(number) {
  let arr = number.split("");
  arr = arr.fill("*", 8, 14);
  return arr.join("");
}

function black(number) {
  let a = number.split("-")[0];
  let b = number.split("-")[1];

  // console.log(a);
  // console.log(b);
  const isValid = HyCheck(number);

  if (isValid) {
    if (numlength(a, b)) {
      let arr = number.split("");
      arr = arr.fill("*", 8, 14);
      console.log(arr.join(""));
    } else {
    }
  }
}
black("920324-1201549");

/* a = number.split("-")[0]
  b = number.split("-")[1]
  
  if (number.includes("-") === false) {
      console.log("에러발생!!!! 형식이 올바르지 않습니다!!!!");
    }  */
