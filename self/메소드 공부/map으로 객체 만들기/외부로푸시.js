const arr = [
  ["철수", 10],
  ["영희", 11],
  ["훈이", 9],
  ["맹구", 10],
];
let arr1 = [];
let aaa = arr.map(([a, b]) => arr1.push({ name: a, age: b }));
