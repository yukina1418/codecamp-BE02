import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
import { emailCheck, getWelcomeTemplate, sendTemplateEmail } from "./email.js";

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
