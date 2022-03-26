// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  let num1 = document.getElementById("PhoneNumber01").value;
  let num2 = document.getElementById("PhoneNumber02").value;
  let num3 = document.getElementById("PhoneNumber03").value;
  let number = num1 + num2 + num3;
  axios({
    method: "post",
    url: "http://localhost:3000/tokens/phone",
    data: {
      myphone: `${number}`,
    },
  }).then((res) => {
    console.log(res);
  });
  document.querySelector("#ValidationInputWrapper").style.display = "flex";
  console.log("인증 번호 전송");
};

// 핸드폰 인증 완료 API 요청
const submitToken = async () => {
  let token = document.getElementById("TokenInput").value;

  axios({
    method: "patch",
    url: "http://localhost:3000/tokens/phone",
    data: {
      token: `${token}`,
    },
  }).then((res) => {
    document.getElementById("ononon").innerHTML = "인증 완료";
  });
};

// 회원 가입 API 요청
const submitSignup = async () => {
  let name = document.getElementById("SignupName").value;
  //////////////////////////////////////////////////////////////
  let num1 = document.getElementById("PhoneNumber01").value;
  let num2 = document.getElementById("PhoneNumber02").value;
  let num3 = document.getElementById("PhoneNumber03").value;
  let number = num1 + num2 + num3;
  //////////////////////////////////////////////////////////////
  let Pernal1 = document.getElementById("SignupPersonal1").value;
  let Pernal2 = document.getElementById("SignupPersonal2").value;
  //////////////////////////////////////////////////////////////
  let pwd = document.getElementById("SignupPwd").value;
  //////////////////////////////////////////////////////////////
  let email = document.getElementById("SignupEmail").value;
  //////////////////////////////////////////////////////////////
  let lovesite = document.getElementById("SignupPrefer").value;
  //////////////////////////////////////////////////////////////
  axios({
    method: "post",
    url: "http://localhost:3000/user",
    data: {
      user: {
        name: `${name}`,
        email: `${email}`,
        personal: `${Pernal1}-${Pernal2}`,
        phone: `${number}`,
        prefer: `${lovesite}`,
        pwd: `${pwd}`,
      },
    },
  })
    .then((res) => {
      // console.log(res);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
  console.log("회원 가입 완료");
};
