import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
import { emailSend, ogGet } from "./ogGet.js";

import express from "express";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors";
import dotenv from "dotenv"; // 중요 정보 암호화 라이브러리

import { Phone } from "./models/token.model.js";
import { User } from "./models/user.model.js";
import { Stock } from "./models/starbucks.model.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

////////////////////////////////////////////////////////////////////////////////////////////////////
//회원 가입 API//회원 가입 API//회원 가입 API//회원 가입 API//회원 가입 API//회원 가입 API//회원 가입 API//회원 가입 API
////////////////////////////////////////////////////////////////////////////////////////////////////

app.post("/user", async (req, res) => {
  const user = req.body.user;
  console.log(user);
  console.log(user.pwd);

  const Token = await Phone.findOne({ phone: `${user.phone}` }).exec();

  if (Token === null || undefined || Token.isAuth === false) {
    res.status(422).send("에러!! 핸드폰 번호가 인증되지 않았습니다.");
  } else {
    const obj = await ogGet(user.prefer);
    user.og = obj;
    user.personal = user.personal.split("").fill("*", 7).join("");

    const Users = new User({
      ...req.body.user,
    });

    await Users.save();
    await emailSend(user);
    const id = await User.findOne({ phone: `${user.phone}` }).exec();
    res.status(201).send(`가입 완료! ${user.name}님의 ID는 ${id._id} 입니다.`);
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////
//회원 목록 조회 API//회원 목록 조회 API//회원 목록 조회 API//회원 목록 조회 API//회원 목록 조회 API//회원 목록 조회 API
////////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/users", async (req, res) => {
  // Board.find() 모든 보드
  const result = await User.find();

  // 2. 꺼내온 결과 응답 주기
  res.send(result);
});

////////////////////////////////////////////////////////////////////////////////////////////////////
//토큰 인증 요청 API//토큰 인증 요청 API//토큰 인증 요청 API//토큰 인증 요청 API//토큰 인증 요청 API//토큰 인증 요청 API
////////////////////////////////////////////////////////////////////////////////////////////////////

app.post("/tokens/phone", async (req, res) => {
  const phone = req.body.myphone;
  let check = await Phone.findOne({ phone: `${phone}` }).exec();
  if (check === null) {
    check = "1";
  }

  checkValidationPhone(phone);
  // 1.  휴대폰 번호 자리수 맞는지 확인하기
  const isValid = checkValidationPhone(phone);
  if (isValid) {
    // 2. 핸드폰 토큰 6자리 만들기
    const mytoken = getToken();
    // 3. 핸드폰 번호에 토큰 정보 전송하기
    sendTokenToSMS(phone, mytoken);

    if (phone !== check.phone) {
      const myphone = new Phone({
        token: mytoken,
        phone: `${phone}`,
        isAuth: false,
      });
      await myphone.save();
      res.status(201).send("인증번호 발송 완료!");
    } else {
      res.status(200).send("인증번호가 변경되었습니다!");

      await Phone.updateOne({ phone: `${phone}` }, { token: mytoken });
    }
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////
//인증 완료 API//인증 완료 API//인증 완료 API//인증 완료 API//인증 완료 API//인증 완료 API//인증 완료 API//인증 완료 API
////////////////////////////////////////////////////////////////////////////////////////////////////

app.patch("/tokens/phone", async (req, res) => {
  const token = req.body.token;

  let db = await Phone.findOne({ token: `${token}` }).exec();

  if (db === null || token !== db.token) {
    res.status(200).send("false");
  } else {
    await Phone.updateOne({ token: `${token}` }, { isAuth: true });
    res.status(201).send("true");
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////
//스타벅스 커피 목록 조회 API//스타벅스 커피 목록 조회 API//스타벅스 커피 목록 조회 API//스타벅스 커피 목록 조회 API
////////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/starbucks", async (req, res) => {
  const result = await Stock.find();
  res.send(result);
});

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

mongoose.connect("mongodb://my-database:27017/project");

////////////////////////////////////////////////////////////////////////////////////////////////////
//몽고디비 커넥팅//몽고디비 커넥팅//몽고디비 커넥팅//몽고디비 커넥팅//몽고디비 커넥팅//몽고디비 커넥팅//몽고디비 커넥팅//몽고디비 커넥팅
////////////////////////////////////////////////////////////////////////////////////////////////////

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
