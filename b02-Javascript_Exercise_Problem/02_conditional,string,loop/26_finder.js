/* 

    문제
    
    임의의 문자열과 기호를 입력받아, 문자열에 포함되어있는 기호의 개수를 알려주는 함수를 완성하세요
    - 빈 문자열을 입력받은 경우, 0을 리턴해야 합니다
    
    ex ) 매개변수로 "+-*%+" 와 "+" 을 차례대로 받을 경우
         "+" 기호의 갯수인 2를 리턴해주세요.

*/

function finder(str, op) {
  // 여기에 코드를 작성하세요

  return str.split("").filter((a) => {
    return a.includes(op);
  }).length;
}

module.exports = finder;
