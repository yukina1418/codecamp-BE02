const express = require("express"); // import는 최신 문법, require는 과거 문법
const app = express();
const port = 3000;

app.use(express.json());
// /는 시작 위치, root라고도 표현한다

app.get("/boards", (req, res) => {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기

  const result = [
    {
      number: 1,
      writer: "철수",
      title: "제목입니다,철수꺼",
      contents: "내용이에요",
    },
    {
      number: 2,
      writer: "영희",
      title: "제목입니다,영희꺼",
      contents: "내용이에요",
    },
    {
      number: 3,
      writer: "훈이",
      title: "제목입니다,훈이꺼",
      contents: "내용이에요",
    },
  ];

  // 2. 꺼내온 결과 응답 주기
  res.send(result);
});

app.post("/boards", (req, res) => {
  // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
  // 프론트엔드로부터 데이터 받아오기
  // 받아온 데이터를 콘솔로 찍어서 확인해보기
  console.log(req.body);
  // 2. 저장 결과 알려주기!!
  res.send("등록에 성공하였습니다.");
});

// app.get("/boards/:id", (req, res) => {
//   res.send("Hello World!");
// });

// app.put("/boards/:id", (req, res) => {
//   res.send("Hello World!");
// });

// app.delete("/boards/:id", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
