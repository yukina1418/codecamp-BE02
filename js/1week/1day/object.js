/*
  어떤 게임의 평점이 담긴 객체가 있습니다. 
  난이도별로 객체를 만들어, 배열 result에 담아 출력할 수 있도록
  for문을 완성해주세요.
  
  [ {난이도 : 점수}, {난이도 : 점수}, ... ]
*/

const score = {
  easy: 234,
  normal: 759,
  hard: 677,
  nightmare: 46,
};

const arr = Object.entries(score);
// console.log(arr);
console.log(arr[0][0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

// entries의 반대 원상복구 console.log(Object.fromEntries(arr));
// [
//   [ 'easy', 234 ],
//   [ 'normal', 759 ],
//   [ 'hard', 677 ],
//   [ 'nightmare', 46 ]
// ]

let result = [];

// for문을 완성해주세요.
for (i = 0; i < arr.length; i++) {
  let obj = {};
  obj[arr[i][0]] = arr[i][1];
  result.push(obj);
  //구조분해할당
  let [key, value] = arr[i];
  let obje = {};
  obj[key] = value;
  result1.push(obje);
  // let [key, val] = arr[i];
  // result.push(key + val);
  // result.push(Object.fromEntries(arr));
  // result.push(arr[i][0] + ":" + arr[i][1]);
}
console.log("결과", result);
console.log("결과", result1);
// [ { easy: 234 }, { normal: 759 }, { hard: 677 }, { nightmare: 46 } ]

/*

const score = {
  easy: 234,
  normal: 759,
  hard: 677,
  nightmare: 46,
};

const arr = Object.entries(score);

let result = [];

for (i = 0; i < arr.length; i++) {
  let [a, b] = [arr[i][0], arr[i][1]];
  let obj = {};
  obj.a = b;
  result.push(obj);
}

console.log(a, b);
*/
