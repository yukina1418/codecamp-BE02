// 100보다 크면 true를 반환하고 100보다 작으면 false를 반환하는 함수를 만들어주세요.

const numbers = [1, 2, 3, 4, 5];

function onehundred(num) {
  return num > 100 ? true : false;
}

console.log(onehundred(80)); //false
console.log(onehundred(120)); //true
