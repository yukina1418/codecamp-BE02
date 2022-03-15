import { emailCheck, getWelcomeTemplate, sendTemplateEmail } from "./email.js";

function createUser({ name, age, school, email, password }) {
  // 1. 이메일이 정상인지 확인(1- 존재여부, 2-"@"가 포함되어 있는지)
  const isValid = emailCheck(email);
  {
    if (isValid) {
      // 2. 가입환영 템플릿 만들기
      const mytemplate = getWelcomeTemplate({ name, age, school });

      // 3. 이메일에 가입환영 템플릿 전송하기
      sendTemplateEmail(email, mytemplate);
    }
  }
}

const myuser = {
  name: "철수",
  age: 8,
  school: "다람쥐초등학교",
  email: "a@a.com",
  password: "1234",
};

createUser(myuser);
