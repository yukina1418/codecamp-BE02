// new Promise((resolve, reject) => {
//   // 뭔가 특정 작업 ( api 보내기 )
//   if (true) {
//     resolve("철수");
//   }
//   if (false) {
//     reject("에러에요");
//   }
// })
//   .then((res) => {})
//   .catch((err) => {});

const fetchData = async () => {
  const result = await new Promise((resolve, reject) => {
    // 뭔가 특정 작업 ( api 보내기 )

    setTimeout(() => {
      // 외부에서 데이터 보내고 받는데 2초 걸림
      try {
        resolve("성공시 받는 데이터");
      } catch (error) {
        reject("실패시 받는 데이터");
      }
    }, 2000);
  }).then((res) => console.log(res));
  // console.log(result)
};
fetchData();
