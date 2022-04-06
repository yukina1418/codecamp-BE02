function aaa(qqq) {
  //함수 로직
}

aaa(function () {});
aaa(() => {});

// 위의 두개가 콜백함수

function req(res) {
  // 외부 Api에 데이터 요청하는 로직
  // ...
  // ...
  // ...
  const result = "요청받아온 데이터 결과 값";
  // 받아온 데이터를 인자로 함수를 사용한다
  res(result);
}

req((result) => {
  console.log("요청이 끝났습니다.");
  console.log(`요청으로 받아온 데이터는 ${result} 입니다`);
});
