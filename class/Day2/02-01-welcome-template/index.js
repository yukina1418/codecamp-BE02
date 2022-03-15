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

function getWelcomeTemplate(name, age, school, createAt) {
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

const myname = "철수";
const myage = 13;
const myschool = "다람쥐초등학교";
const mycreateAt = "2020-01-02";
getWelcomeTemplate(myname, myage, myschool, mycreateAt);

//isChecked
//hasApple 얘네 두개는 true false형태로 사용함
