/* 

    문제
    
    임의의 수(num)를 입력받아, 0부터 해당 num까지의 인덱스를 적은 문자열을 반환하는 함수를 완성하세요
    
    ex) idxString(3) => '0123'
        idxString(0) => '0'
        idxString(9) => '0123456789'
        idxString(-2) => '0-1-2'

*/

function idxString(num) {
  // 여기에 코드를 작성하세요
  let sum = "";
  if (num > 0) {
    for (let i = 0; i <= num; i++) {
      sum = sum + i;
    }
  } else if (num < 0) {
    for (let j = 0; j >= num; j--) {
      sum = sum + j;
    }
  } else if (num === 0) {
    return "0";
  }
  return sum;
}

module.exports = idxString;
