// 주어진 배열의 2번째부터 5번째까지 숫자 10으로 변경해 주는 함수를 만들어주세요.
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function fill(arr) {
  return arr.fill(10, 1, 5);
}
console.log(fill(arr)); // [1, 10, 10, 10, 10, 6, 7, 8]
