import axios from "axios";

export function emailCheck(email) {
  let id = email.split("@")[0];
  let com = email.split("@")[1];
  if (email.includes("@") === false) {
    console.log("이메일 형식이 올바르지 않습니다.");
    return false;
  } else if (id === "" || com === "") {
    console.log("이메일이 올바르지 않습니다.");
    return false;
  } else {
    console.log("정상 처리 되었습니다.");
    return true;
  }
}

export function getWelcomeTemplate({ name, age, school }) {
  const aaa = new Date();
  const yyyy = aaa.getFullYear();
  const mm = aaa.getMonth() + 1;
  const dd = aaa.getDate();

  const createAt = `${yyyy}-${mm}-${dd}`;
  //year + "-" + month + "-" + date

  // 여기서 오늘 날짜로 만들기!!

  return `
      <html>
          <body> 
              <h1> ${name}님 가입을 환영합니다!! </h1>
              <hr/>
              <div>이름: ${name}</div>
              <div>나이: ${age}</div>
              <div>학교: ${school}</div>
              <div>가입일: ${createAt}</div>
          </body>
      </html>
      `;
}

export async function sendTemplateEmail(email, mytemplate) {
  const appKey = process.env.EMAIL_APP_KEY;
  const XSecretKey = process.env.EMAIL_X_SECRET_KEY;
  const sender = process.env.EMAIL_SENDER;
  const result = await axios.post(
    `https://api-mail.cloud.toast.com/email/v2.0/appKeys/${appKey}/sender/mail`,
    {
      senderAddress: sender,
      title: "안녕하세요 철수님, 가입을 환영합니다.",
      body: mytemplate,
      receiverList: [
        {
          receiveMailAddr: email,
          receiveType: "MRT0",
        },
      ],
    },
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "X-Secret-Key": XSecretKey,
      },
    }
  );
  console.log(result);
  console.log("전송 끝!!!");
  // console.log(email + "이메일로" + mytemplate + "을 발송합니다!");
}
