/* 모듈화 공부해서 적용해보기
import { sendMessage } from "./lb";
import { end } from "./lb";
import { reset } from "./lb";
import { signUpButton } from "./lb"; 
*/

function sendMessage() {
  document.getElementById("sendMessage").disabled = false;
  document.getElementById("sendMessage").style =
    "color: #0068ff;background-color:#FFFFFF;cursor: Pointer; ";
}

function end() {
  document.getElementById("end").style =
    "color: #FFFFFF;background-color:#0068ff;cursor: Pointer; ";
  document.getElementById("end").disabled = false;
}

function reset() {
  document.getElementById("otp").innerText = "000000";
  document.getElementById("timeLimit").innerText = "03:00";
  document
    .getElementById("end")
    .setAttribute("style", "background-color:none;");
  document.getElementById("end").disabled = true;
}
function signUpButton() {
  document
    .getElementById("end")
    .setAttribute("style", "background-color:none;");
  document.getElementById("end").disabled = true;
  document.getElementById("signUpButton").disabled = false;
  document.getElementById("signUpButton").style =
    "color: #0068ff;background-color:#FFFFFF; border:1px solid #0068ff; cursor: Pointer; ";
}

function change1() {
  let num1 = document.getElementById("num1").value;
  if (num1.length === 3) {
    num2.focus();
  }
}

function change2() {
  let num2 = document.getElementById("num2").value;
  if (num2.length === 4) {
    num3.focus();
  }
}

function change3() {
  let num3 = document.getElementById("num3").value;
  if (num3.length === 4) {
    sendMessage();
  }
}

/* 토큰 발급 & 인증까지 */
let isStarted = false;

let getToken = () => {
  if (isStarted === false) {
    //타이머가 작동중이 아닐 경우
    isStarted = true;
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("otp").innerText = token;
    document
      .getElementById("sendMessage")
      .setAttribute("style", "background-color:none;");
    document.getElementById("sendMessage").disabled = true;
    end();
    /* 여기부터 타이머 돌아가는 곳 */

    let time = 180;
    let timer = null;

    timer = setInterval(function () {
      if (time >= 0) {
        let min = String(Math.floor(time / 60)).padStart(2, "0");
        let sec = String(time % 60).padStart(2, "0");
        document.getElementById("timeLimit").innerText = min + ":" + sec;
        time = time - 1;
      } else {
        reset();
        isStarted = false;
        clearInterval(timer);
      }
    }, 1000);
  } else {
    // 타이머가 작동중일 경우
    alert("타이머가 이미 작동중입니다.");
  }
};

/* 인증 확인부터 가입 버튼 활성화까지 */

let sign = () => {
  alert("인증이 완료되었습니다.");
  document.getElementById("end").innerHTML = "인증완료";
  signUpButton();
};

/* 가입 에러 유무 확인 */

function signUpCheck() {
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let passwordCheck = document.getElementById("passwordCheck").value;
  let region = document.getElementById("region").value;
  let woman = document.getElementById("woman").checked;
  let man = document.getElementById("man").checked;
  let check = true;
  let id = email.split("@")[0];
  let com = email.split("@")[1];

  /* 이메일 확인 */
  if ((email.includes("@") && id === "") || com === "") {
    document.getElementById("emailError").innerHTML =
      "이메일 형식이 올바르지 않습니다.";
    check = false;
  } else if (email === "") {
    document.getElementById("emailError").innerHTML =
      "이메일이 올바르지 않습니다.";
    check = false;
  } else {
    document.getElementById("emailError").innerHTML = "";
  }
  /* 이름 확인 */
  if (name === "") {
    document.getElementById("nameError").innerHTML =
      "이름이 올바르지 않습니다.";
    check = false;
  } else {
    document.getElementById("nameError").innerHTML = "";
  }

  /* 비밀번호 공란인지 확인 */
  if (password === "") {
    document.getElementById("passwordError").innerText =
      "비밀번호가 입력해 주세요";
    check = false;
  } else {
    document.getElementById("passwordError").innerHTML = "";
  }
  /* 비밀번호 확인 공란인지 확인 */
  if (passwordCheck === "") {
    document.getElementById("passwordCheckError").innerHTML =
      "비밀번호를 입력해 주세요.";
    check = false;
  } /* 비밀번호 서로 같은지 체크*/ else if (password !== passwordCheck) {
    document.getElementById("passwordCheckError").innerHTML =
      "비밀번호가 일치하지 않습니다.";
    check = false;
  } else {
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("passwordCheckError").innerHTML = "";
  }

  /* 지역 체크 */
  if (region === "지역을 선택하세요.") {
    document.getElementById("regionError").innerHTML = "지역을 선택해 주세요.";
    check = false;
  } else {
    document.getElementById("regionError").innerHTML = "";
  }
  /* 성별 체크 */
  if (woman === false && man === false) {
    document.getElementById("genderError").innerHTML = "성별을 지정해주세요.";
    check = false;
  } else {
    document.getElementById("genderError").innerHTML = "";
  }
  /* 모든게 확인된건지 체크 */

  if (check == true) {
    alert("코드캠프 가입을 축하합니다!");
  }
}
