import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.get("/users", (req, res) => {
  const result = [
    {
      email: "still@codecamp.com",
      name: "철수",
      phone: "01012348352",
      personal: "970102-1047462",
      prefer: "https://nodejs.org/ko/",
    },
    {
      email: "JJang@gmail.com",
      name: "짱구",
      phone: "01012345678",
      personal: "961210-1306913",
      prefer: "https://google.com",
    },
    {
      email: "hungi@naver.com",
      name: "훈이",
      phone: "01012345678",
      personal: "960620-1607243",
      prefer: "https://www.npmjs.com/",
    },
    {
      email: "yuri@daum.net",
      name: "유리",
      phone: "01079367937",
      personal: "961012-2048137",
      prefer: "https://papago.naver.com/",
    },
    {
      email: "Wkddk@gmail.com",
      name: "짱아",
      phone: "01020205723",
      personal: "100420-4105257",
      prefer: "https://swagger.io/",
    },
  ];

  // 2. 꺼내온 결과 응답 주기
  res.send(result);
});

app.get("/starbucks", (req, res) => {
  const result = [
    { name: "에스프레소", kcal: 2 },
    { name: "아메리카노", kcal: 5 },
    { name: "카페라떼", kcal: 105 },
    { name: "카라멜마끼야또", kcal: 155 },
    { name: "카페모카", kcal: 120 },
    { name: "자바칩프라프치노", kcal: 200 },
    { name: "돌차라떼", kcal: 200 },
    { name: "오늘의 커피", kcal: 10 },
    { name: "바닐라 플랫 화이트", kcal: 230 },
    { name: "블론드 바닐라 더블 샷 마끼야또", kcal: 999999 },
  ];
  // 2. 꺼내온 결과 응답 주기
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
