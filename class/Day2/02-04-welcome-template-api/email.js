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

export function sendTemplateEmail(email, mytemplate) {
  console.log(email + "이메일로" + mytemplate + "을 발송합니다!");
}
