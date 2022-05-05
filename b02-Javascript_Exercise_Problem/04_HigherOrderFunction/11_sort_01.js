/* 

    sort 메서드는 특정된 배열 데이터의 길이만큼 반복 실행하여
    콜백 함수로 받아오는 두개의 매개변수 데이터를 서로 비교한 후
    배열 데이터의 앞 뒤 순서를 변경합니다.

    ----

    문제

    숫자 데이터가 담겨있는 1차원 배열 arr 와
    오름차순으로 정렬할지, 내림차순으로 정렬할지를 정하는 boolean 타입 데이터
    sortType 을 매개변수로 받아올 때,

    sort 메서드를 직접 사용해 숫자 데이터가 들어있는 배열 전체를
    sortType 이 true 일 때는 오름차순으로 정렬하고
    sortType 이 false 일 때는 내림차순으로 정렬해주세요.


    !! sort 에 관한 정보는 MDN (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 을 참고해보세요.

    ----

    입력 예시
    
    // 오름차순
    1. sort_01([10, 4, 55, 22, 1], true)

    // 내림차순
    2. sort_01([10, 4, 55, 22, 1], false)

    ----

    출력 예시
    
    // 오름차순
    1.  [1, 4, 10, 22, 55]

    // 내림차순
    2.  [55, 22, 10, 4, 1]
    
*/

function sort_01(arr, sortType) {
  // 여기에 코드를 작성하세요
  if (sortType === true) {
    return arr.sort((a, b) => a - b);
  } else {
    return arr.sort((a, b) => b - a);
  }
}

module.exports = sort_01;
