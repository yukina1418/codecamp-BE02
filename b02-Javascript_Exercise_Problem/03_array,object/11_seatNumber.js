/* 

    문제
    
    좌석이 몇번째 행(row)과 열(col)까지 있는 지 입력받아, 배열을 이용하여 각 자리에 번호를 붙여야 합니다.
    
    ----

    출력 예시

    seatNumber(3, 5) 일 경우,

    01 02 03 04 05
    06 07 08 09 10
    11 12 13 14 15

    과 같은 형태가 되어야 합니다.

    각 행(row)를 배열로 감싸고, 전체를 배열로 한번 더 감싸 아래와 같이 리턴하여야 합니다.
    [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]]
    
*/

function seatNumber(row, col) {
  // 여기에 코드를 작성하세요
  let arr = [];

  for (let a = 0; a < row; a++) {
    arr.push([]);
  }
  let count = 1;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      arr[i].push(count);
      count += 1;
    }
  }
  return arr;
}

module.exports = seatNumber;
