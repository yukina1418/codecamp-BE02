import axios from "axios";

export function getWelcomeTemplate(name, phone, prefer) {
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
              <div>전화번호: ${phone}</div>
              <div>좋아하는사이트: ${prefer}</div>
              <div>가입일: ${createAt}</div>
          </body>
      </html>
      `;
}

export async function sendTemplateEmail(email, mytemplate) {
  const appKey = "B5rcqHp3To4Et87f";
  const XSecretKey = "T033Z4kC";
  const sender = "support@yuikna.site";
  const result = await axios.post(
    `https://api-mail.cloud.toast.com/email/v2.0/appKeys/${appKey}/sender/mail`,
    {
      senderAddress: sender,
      title: "가입을 환영합니다^^",
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
