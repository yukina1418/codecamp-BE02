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
  console.time("=== 개별 Promise 각각 ===");
  const result1 = await new Promise((resolve, reject) => {
    // 뭔가 특정 작업 ( api 보내기 )

    setTimeout(() => {
      try {
        resolve("성공시 받는 데이터");
      } catch (error) {
        reject("실패시 받는 데이터");
      }
    }, 2000);
  }).then((res) => console.log(res));

  const result2 = await new Promise((resolve, reject) => {
    // 뭔가 특정 작업 ( api 보내기 )

    setTimeout(() => {
      try {
        resolve("성공시 받는 데이터");
      } catch (error) {
        reject("실패시 받는 데이터");
      }
    }, 3000);
  }).then((res) => console.log(res));

  const result3 = await new Promise((resolve, reject) => {
    // 뭔가 특정 작업 ( api 보내기 )

    setTimeout(() => {
      try {
        resolve("성공시 받는 데이터");
      } catch (error) {
        reject("실패시 받는 데이터");
      }
    }, 1000);
  }).then((res) => console.log(res));
  console.timeEnd("=== 개별 Promise 각각 ===");
};

const fetchData2 = async () => {
  console.time("=== Promise All 각각 ===");
  await Promise.all([
    new Promise((resolve, reject) => {
      // 뭔가 특정 작업 ( api 보내기 )

      setTimeout(() => {
        try {
          resolve("성공시 받는 데이터");
        } catch (error) {
          reject("실패시 받는 데이터");
        }
      }, 2000);
    }),
    new Promise((resolve, reject) => {
      // 뭔가 특정 작업 ( api 보내기 )

      setTimeout(() => {
        try {
          resolve("성공시 받는 데이터");
        } catch (error) {
          reject("실패시 받는 데이터");
        }
      }, 3000);
    }),
    new Promise((resolve, reject) => {
      // 뭔가 특정 작업 ( api 보내기 )

      setTimeout(() => {
        try {
          resolve("성공시 받는 데이터");
        } catch (error) {
          reject("실패시 받는 데이터");
        }
      }, 1000);
    }),
  ]);
  console.timeEnd("=== Promise All 각각 ===");
};

fetchData();
fetchData2();
