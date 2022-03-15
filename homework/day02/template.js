/* function SighIn(email, number, phone, site) {
  console.log(
    `
    이메일 : ${email}
    주민번호 : ${number}
    핸드폰 번호 : ${phone}
    내가 좋아하는 사이트 : ${site}`
  );
}

SighIn("yukina1418@gamil.com", 9607011205429, "01034017015", "www.naver.com");
*/

import { emailCheck, getWelcomeTemplate, sendTemplateEmail } from "./lib.js";

function createUser({ email, number, phone, likeSite }) {
  const isValid = emailCheck(email);
  {
    if (isValid) {
      const mytemplate = getWelcomeTemplate({ email, number, phone, likeSite });

      sendTemplateEmail(mytemplate);
    }
  }
}

const myuser = {
  email: "yukina1418@gmail.com",
  number: "960701-1234567",
  phone: "01034017015",
  likeSite: "google.com",
};

createUser(myuser);
