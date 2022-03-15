// module 방식
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";

// commonjs 방식
// const {checkValidationPhone} = require('')
function createTokenOfPhone(myphone) {
  // 1.  휴대폰 번호 자리수 맞는지 확인하기
  const isValid = checkValidationPhone(myphone);
  if (isValid) {
    // 2. 핸드폰 토큰 6자리 만들기
    const mytoken = getToken();
    // 3. 핸드폰 번호에 토큰 정보 전송하기
    sendTokenToSMS(myphone, mytoken);
  }
}

createTokenOfPhone("01034017015");
