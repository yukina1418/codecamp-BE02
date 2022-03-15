const apple = 3;
const banana = 2;
console.log(
  "철수는 사과를 " +
    apple +
    "개, " +
    "바나나를 " +
    banana +
    "개 가지고 있습니다."
);
console.log(`철수는 사과를 ${apple}개, 바나나를 ${banana}개 가지고 있습니다.`); // 템플릿 리터럴

function getWelcomeTemplate({ myname, myage, myschool }) {
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
            <h1> ${myname}님 가입을 환영합니다!! </h1>
            <hr/>
            <div>이름: ${myname}</div>
            <div>나이: ${myage}</div>
            <div>학교: ${myschool}</div>
            <div>가입일: ${createAt}</div>
        </body>
    </html>
    `;
}

const myuser = {
  myname: "철수",
  myage: 13,
  myschool: "다람쥐초등학교",
};

const result = getWelcomeTemplate(myuser);
console.log(result);

//isChecked
//hasApple 얘네 두개는 true false형태로 사용함
