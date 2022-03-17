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
    console.log("이메일이 정상 처리 되었습니다.");
    return true;
  }
}
function out(number) {
  let num = number.split("");
  num = num.fill("*", 8, 14);
  return num.join("");
}
export function getWelcomeTemplate({ email, number, phone, likeSite }) {
  return `
        <html>
            <body> 
                <div>이메일: ${email}</div>
                <div>주민번호: ${out(number)}</div>
                <div>휴대폰 번호: ${phone}</div>
                <div>내가 좋아하는 사이트: ${likeSite}</div>
            </body>
        </html>
        `;
}

export function sendTemplateEmail(mytemplate) {
  console.log(`${mytemplate}`);
}
