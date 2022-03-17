// 코캠컴퍼니에서는 신입사원을 뽑고있습니다.
// 프론트엔드 직무 지원자 명단과
// 백엔드 직무 지원자 명단이 주어질 때,
// 중복 지원한 사람을 찾아 배열에 담아 리턴해주세요.
function solution(front, back) {
  return front.filter((it) => back.includes(it));
}

const front = ["아라", "세준", "재환"];
const back = ["지연", "아라", "재훈"];
const result = solution(front, back);
console.log("결과", result); // ["아라"]

/*
function solution(aisa, kanji) {
  return aisa.filter((it) => kanji.includes(it));
}

const aisa = ["대한민국", "러시아", "태국", "일본"];
const kanji = ["대한민국", "일본", "중국"];
const result = solution(aisa, kanji);
console.log("결과", result);

aisa.filter()
*/
