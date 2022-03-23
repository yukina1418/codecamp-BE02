import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
import { emailCheck, getWelcomeTemplate, sendTemplateEmail } from "./email.js";

import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import mongoose from "mongoose";
import dotenv from "dotenv"; // 중요 정보 암호화 라이브러리
import { Board } from "./models/board.model.js";
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.get("/boards", async (req, res) => {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  // Board.findOne({writer:"철수"}) writer가 철수인거 한개
  // Board.find({writer:"철수"}) writer가 철수인거 전부
  // Board.find() 모든 보드

  const result = await Board.find();

  // 2. 꺼내온 결과 응답 주기
  res.send(result);
});

app.post("/boards", async (req, res) => {
  // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
  // 프론트엔드로부터 데이터 받아오기
  // 받아온 데이터를 콘솔로 찍어서 확인해보기

  //req.body에 담겨오기 때문에 객체에서 가

  const board = new Board({
    // writer: req.body.writer,
    // title: req.body.title,
    // contents: req.body.contents,
    ...req.body,
  });

  await board.save();

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

app.post("/users", (req, res) => {
  const myuser = req.body.user;

  const isValid = emailCheck(myuser.email);
  {
    if (isValid) {
      // 2. 가입환영 템플릿 만들기
      const mytemplate = getWelcomeTemplate(myuser);

      // 3. 이메일에 가입환영 템플릿 전송하기
      sendTemplateEmail(myuser.email, mytemplate);
      res.send("가입완료!");
    }
  }
});

// mongoose.connect("mongodb://아이피주소:포트번호/데이터베이스이름") 없으면 지가 알아서 만들어서 넣는다
// 몽고DB 접속
mongoose.connect("mongodb://my-database:27017/codecamp");

// Backend API 서버 오픈!! (대기)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
