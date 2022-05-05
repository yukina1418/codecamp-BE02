/* 

    every 메서드는 특정된 배열 데이터의 길이만큼 반복 실행하여
    배열 전체 데이터가 콜백 함수의 리턴값에 true 값일 경우 true 를 리턴하고
    배열 데이터 하나라도 콜백 함수의 리턴값에 false 라면 false 를 리턴합니다.

    ----

    문제

    숫자 데이터가 담겨있는 1차원 배열 arr 와,
    콜백 함수인 callback 이 매개변수로 주어졌을 때

    배열 전체 데이터가 콜백 함수를 거쳐서 나온 결과값들이 전부 true 일 경우에는 true,
    하나라도 false 일 때는 false 를 리턴해주세요.

    
    !! every 매서드가 직접 사용되면 안됩니다.

    ----

    입력 예시
    
    1. every(
            function( data ) { return data > 1 },
            [2, 3, 4, 5, 6]
        )

    2. every(
            function( data ) { return data > 1 },
            [2, 2, 2, 1, 5]
        )
    
    ----

    출력 예시

    1.  true

    2.  false
    
*/

function every(callback, arr) {
  // 여기에 코드를 작성하세요
  for (num of arr) {
    if (!callback(num)) return false;
  }
  return true;
}

module.exports = every;
