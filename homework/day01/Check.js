export function numlength(a, b) {
  if (a.length !== 6 || b.length !== 7) {
    console.log("에러발생!!!! 갯수를 제대로 입력해주세요!!!!");
    return false;
  } else {
    return true;
  }
}

export function HyCheck(number) {
  if (number.includes("-") === false) {
    console.log("에러발생!!!! 형식이 올바르지 않습니다!!!!");
    return false;
  } else {
    return true;
  }
}
