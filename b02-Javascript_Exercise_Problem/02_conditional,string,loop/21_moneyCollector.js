/* 

    문제
    
    임의의 문자열을 입력받아, 문자열 사이에 숨어있는 달러($)를 찾아 인덱스를 반환하는 함수를 완성하세요.
    달러 기호가 없는 경우, '찾을 수 없음' 이라는 문자열을 반환해야 합니다.

    ---

    힌트

    반복문을 사용해야 합니다
*/

function moneyCollector(str) {
  // 여기에 코드를 작성하세요
  if (str.includes("$") === false) {
    return "찾을 수 없음";
  } else {
    return str.indexOf("$");
  }
}

module.exports = moneyCollector;
