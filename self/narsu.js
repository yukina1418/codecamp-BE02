// array.sort(slice(i-1, j-1))array[k]
let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commands) {
  const as = [];
  for (i = 0; i < commands.length; i++) {
    let f = commands[i][0] - 1;
    let s = commands[i][1];
    let u = commands[i][2] - 1;
    as.push(array.slice(f, s).sort().at(u));
  }
  return as;
}

console.log(solution(array, commands));

const arr = [3, 2, 6];
const divisor = 10;
const a = arr
  .reduce((a, b) => (b % divisor === 0 ? [...a, b] : a), [])
  .sort(function (a, b) {
    return a - b;
  });

a.length === 0 ? [-1] : a;
const b =
  arr[0] % divisor === 0
    ? arr
        .filter((a) => a % divisor === 0)
        .sort(function (a, b) {
          return a - b;
        })
    : [-1];

console.log(a);
console.log(b);

a = arr
  .reduce((a, b) => (b % divisor === 0 ? [...a, b] : a), [])
  .sort(function (a, b) {
    return a - b;
  });

//   return a.length === 0 ? [-1] : a;

// const arr = [87,89,92,100,72]

// function solution(arr){
// let len = arr.length
// let a = Array.from({length : len}, ()=>1)

// for(let i = 0; i < len; i++){
//   for(let j =0; j < len; j++){
//     if(arr[j] > arr[i]) a[i]++
//     }
//   }
//  return a
// }

// solution(arr)
