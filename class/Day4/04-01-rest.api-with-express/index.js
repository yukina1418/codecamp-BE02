const express = require("express"); // import는 최신 문법, require는 과거 문법
const app = express();
const port = 3000;

// /는 시작 위치, root라고도 표현한다

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// listen 접속을 기다리는 중
// 24시간을 켜놔야 한다
// 이 코드는 현재 서버 프로그램이다
// 서버 프로그램을 켜놓는 컴퓨터를 서버 컴퓨터라고 부른다

// api가 담겨져있는 서버프로그램을 백엔드 서버 프로그램이라 부른다
// 그 위에것은 백엔드 서버 컴퓨터라고 부른다

// 프론트 엔드
