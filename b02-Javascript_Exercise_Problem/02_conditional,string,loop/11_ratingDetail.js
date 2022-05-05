/*

    문제

    점수를 입력받아 점수에 맞는 등급을 자세히 알려주는 함수를 완성하세요.
    점수가 0점 미만이거나 100점을 초과할 경우 '잘못된 입력입니다'를 리턴해야 합니다.

    > 등급 영역
        - 0점 미만 또는 100 점 초과 : '잘못된 입력입니다'
        - 90점 ~ 100점 : 'A'
        - 80점 ~ 89점 : 'B'
        - 70점 ~ 79점 : 'C'
        - 60점 ~ 69점 : 'D'
        - 0점 ~ 59점 : '등급 미달'

    > 세부 등급
        - 각 점수 등급 중 일의 자리 점수에 따라 세부 등급을 기존 등급 뒤에 붙여 표시해야 합니다. 
        - 7~9점대는 +
        - 4~6점대는 0
        - 0~3점대는 -

        ex) 72점 => C-
            89점 => B+
           100점 => A+
*/

function ratingDetail(num) {
  // 여기에 코드를 작성하세요
  let check = "";
  if (num < 0 || num > 100) {
    return "잘못된 입력입니다";
  } else if (num >= 90) {
    check = "A";
  } else if (num >= 80) {
    check = "B";
  } else if (num >= 70) {
    check = "C";
  } else if (num >= 60) {
    check = "D";
  } else {
    return "등급 미달";
  }

  if (num === 100) {
    return "A+";
  } else if (Number(String(num)[1]) >= 7) {
    return (check = check + "+");
  } else if (Number(String(num)[1]) >= 4) {
    return check;
  } else {
    return (check = check + "-");
  }
}

module.exports = ratingDetail;
