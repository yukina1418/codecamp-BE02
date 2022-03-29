// const strings = ["sun", "bed", "car"]
// const n = 1

// strings.sort(function(a,b){
//   if(a.strings[1] < b.strings[1]){
//     return -1;
//   }

// })

// function solution(strings, n) {

//   let NEW = ""
//   for(let i=0; i<strings.length; i++){
//     for(let j=0; j<strings.length; j++){

//     }
//   }
// }

// solution(strings,n)

// n으로 입력받는 수를 인덱스 번호로 지정하여 그 기준으로 정렬을 한다.
// 정렬이 된 순서대로 새로운 배열에 넣어주는게 더 쉬울 것 같다

// const n = 1
// // 소트 할 배열
// var list = ["sun", "bed", "car"];
// // const strings = ["sun", "bed", "car"]

// // 임시 배열은 위치 및 정렬 값이있는 객체를 보유합니다.
// var mapped = list.map(el =>{return el.substring(n)})

// console.log(mapped)

// // 축소 치를 포함한 매핑 된 배열의 소트
// mapped.sort()

// // 결과 순서를 위한 컨테이너
// var result = mapped.map(el=>{return list[el]})

// console.log(result)

let n = 2;
// 소트 할 배열
var list = ["abcae", "abcd", "cdx"];

// 임시 배열은 위치 및 정렬 값이있는 객체를 보유합니다.
var mapped = list.map((el, i) => {
  return { index: i, value: el.substring(n) };
});

console.log(mapped);

// 축소 치를 포함한 매핑 된 배열의 소트
mapped.sort(function (a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});

console.log(mapped);

// 결과 순서를 위한 컨테이너
var result = mapped.map(function (el) {
  return list[el.index];
});

console.log(result);
