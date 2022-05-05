/* 

    문제
    
    임의의 수(num)를 입력받아, 1부터 num까지의 수 중에서, 5의 배수로만 구성된 문자열을 리턴하는 함수를 완성하세요
    - 5의 배수가 없을 경우 빈 문자열을 리턴합니다
    
    ex) penta(98) => '5101520253035404550556065707580859095'
        penta(16) => '51015'

*/

function penta(num) {
  // 여기에 코드를 작성하세요
  let answer = "";
  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0) {
      answer = answer + i;
    }
  }
  return answer;
}

module.exports = penta;
