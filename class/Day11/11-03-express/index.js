import { Express } from "express";

const app = Express();

// 상품 구매하기 api

app.post("/products/buy", () => {
  // 1. 가진 돈을 검증하는 코드 (대략 10줄 정도)
  // ...
  // ...
  // ...
  // ...
  // ...
  // ...
  // ...
  // ...
  // ...
  // 2. 판매 여부 검증하는 코드 (대략 10줄 정도)
  // ...
  // ...
  // ...
  // ...
  // ...
  // ...
  // ...
  // ...
  // ...
  // 3. 상품 구매하는 코드
  // if(돈있음 && 상품 판매중) {
  res.send("상품 구매 완료!!");
  //}
});

// 상품 환불하기 api

app.post("/products/refund", () => {
  // 1. 판매 여부 검증하는 코드 (대략 10줄 정도)
  // ...
  // ...
  // ...
  // ...
  // ...
  // ...
  // ...
  // ...
  // ...
  // 2. 상품 환불하는 코드
  //if(!판매중){
  res.send("상품 환불 완료");
  //}
});

app.listen(3000);
