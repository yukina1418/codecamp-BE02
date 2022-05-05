/* 

    문제
    
    임의의 문자열 3개를 입력받아, 가장 긴 문자열을 리턴하는 함수를 완성하세요
    가장 긴 문자열이 두개 이상일 경우 가장 마지막에 찾은 문자열을 리턴해주세요.

*/

function whatIsLong(str1, str2, str3) {
  // 여기에 코드를 작성하세요
  const str11 = str1.length;
  const str22 = str2.length;
  const str33 = str3.length;

  const max = Math.max(str11, str22, str33);

  if (max === str11) {
    return str1;
  } else if (max === str22) {
    return str2;
  } else {
    return str3;
  }
}

module.exports = whatIsLong;
