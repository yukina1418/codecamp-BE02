import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import dotenv from "dotenv"; // 중요 정보 암호화 라이브러리
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

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

app.post("/tokens/phone", (req, res) => {
  console.log(req.body);
  const myphone = req.body.myphone;

  checkValidationPhone(myphone);
  // 1.  휴대폰 번호 자리수 맞는지 확인하기
  const isValid = checkValidationPhone(myphone);
  if (isValid) {
    // 2. 핸드폰 토큰 6자리 만들기
    const mytoken = getToken();
    // 3. 핸드폰 번호에 토큰 정보 전송하기
    sendTokenToSMS(myphone, mytoken);
    res.send("인증완료!");
  }
});

app.get("/users", (req, res) => {
  res.send("Hello World!");
});

// app.put("/boards/:id", (req, res) => {
//   res.send("Hello World!");
// });

// app.delete("/boards/:id", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
