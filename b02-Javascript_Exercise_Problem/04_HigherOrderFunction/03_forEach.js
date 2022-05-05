/* 

    forEach 메서드는 특정된 배열 데이터의 길이만큼 반복 실행하여
    리턴되는 함수 안에서 반복 로직을 실행합니다.

    ----

    문제

    숫자 데이터가 담겨있는 1차원 배열 arr 와
    반복 실행할 로직을 담고 있는 콜백 함수인 callback 이 매개변수로 주어졌을 때

    arr 각각의 요소에 콜백 함수를 적용한 결과값을
    str 변수에 차례로 담아주세요.


    !! forEach 매서드가 직접 사용되면 안됩니다.
    !! 제출은 꼭 함수 안에서 console.log(str) 형태로 제출하셔야 합니다.

    ----

    입력 예시
    
    forEach(
        function( data ) { return data + "-" },
        [1, 2, 3, 4, 5]
    )
    
    ----

    출력 예시
    
        console.log(str) // "1-2-3-4-5-"
        
*/

function forEach(callback, arr) {
  let str = "";
  // 여기에 코드를 작성하세요
  for (num of arr) {
    str = str + callback(num);
  }

  console.log(str); // 수정하거나 삭제하지 마세요.
}

module.exports = forEach;
