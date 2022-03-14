const numbers = [1, 2, 3, 4, 5];

function callBackFn(ele, idx, arr) {
  return ele >= 5;
}

let result = numbers.find(callBackFn);
console.log("결과", result); // 5
