console.log("안녕하세요~~");

function getToken(mycount) {
  if (mycount === undefined) {
    console.log("에러 발생!!! 갯수를 제대로 입력해주세요!");
    return;
  } else if (mycount <= 0) {
    console.log("에러발생!!!! 갯수가 너무 적습니다!!!");
    return;
  } else if (mycount > 10) {
    console.log("에러발생!!! 갯수가 너무 많습니다!");
    return;
  }
  const result = String(Math.floor(Math.random() * 10 ** mycount)).padStart(
    mycount,
    "0"
  );

  console.log(result); // 만들어진 토큰 출력

  return result;
}

getToken();
