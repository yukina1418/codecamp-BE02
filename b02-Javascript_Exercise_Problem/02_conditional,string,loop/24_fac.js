/* 

    문제
    
    임의의 수(num)를 입력받아, 해당 수 까지의 팩토리얼을 한 결과값을 리턴하는 함수를 완성하세요
    팩토리얼은 자연수 1부터 num까지의 곱을 계산하는 것입니다.
    fac(1) => 1
    fac(2) => 1 * 2 = 2
    fac(3) => 1 * 2 * 3 = 6
    fac(4) => 1 * 2 * 3 * 4 = 24

*/

function fac(num) {
  // 여기에 코드를 작성하세요
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum = sum * i;
  }
  return sum;
}

module.exports = fac;
