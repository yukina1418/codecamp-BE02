/* 

    reduce 메서드는 특정된 배열 데이터의 길이만큼 반복 실행하여
    콜백 함수에서 배열의 각각의 요소들을 가져와 누적값, 현재값을 매개변수로 받습니다.

    누적값은 반복문이 진행될 때마다 연산된 데이터가 저장이 되어 다음 반복문으로 넘어가며
    현재값은 현재 반복문에서 가져올 수 있는 배열의 요소 데이터를 가져옵니다.

    reduce 메서드에서는 초기값을 설정할 수 있으며,
    초기값이 설정될 경우 배열의 첫번째 데이터가 아닌 초기값이 누적값으로 할당됩니다.
    초기값이 없을 경우, 누적값은 배열의 가장 첫번째 데이터를
    현재값은 배열의 두번째 데이터를 제일 먼저 가져옵니다.

    ----

    문제

    문자 데이터가 들어있는 1차원 배열 arr 와,
    반복 실행하여 문자열을 서로 더해주는 콜백 함수 callback 이 매개변수로 주어지고,
    초기값을 의미하는 initialValue 가 옵션으로 주어질 경우
    배열에 있는 모든 문자열을 하나의 문자열로 리턴해주세요.


    !! reduce 메서드가 직접 사용되면 안됩니다.
    !! 초기값에는 숫자 타입 이외의 데이터가 들어올 수 있습니다.

    ----

    입력 예시
    
    1. reduce_03(
        function( acc, cur ) { return acc + cur },
        ["코딩 공부를", " 열심히", " 하고 있습니다."]
    )

    // 초기값이 주어질 경우
    2. reduce_03(
        function( acc, cur ) { return acc + cur },
        [" 코드캠프 입니다.", " 취미는", " 코딩입니다."],
        "제 이름은"
    )

    ----

    출력 예시

    1.  "코딩 공부를 열심히 하고 있습니다."

    2.  "제 이름은 코드캠프 입니다. 취미는 코딩입니다."
*/

function reduce_03(callback, arr, initialValue) {
  // 여기에 코드를 작성하세요
  if (initialValue === undefined) {
    initialValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
      initialValue = callback(initialValue, arr[i]);
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      initialValue = callback(initialValue, arr[i]);
    }
  }

  console.log(initialValue);
  return initialValue;
}

module.exports = reduce_03;
