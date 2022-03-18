const myShopping = [
  { category: "과일", price: 12000 },
  { category: "의류", price: 10000 },
  { category: "의류", price: 20000 },
  { category: "장난감", price: 9000 },
  { category: "과일", price: 5000 },
  { category: "의류", price: 10000 },
  { category: "과일", price: 8000 },
  { category: "의류", price: 7000 },
  { category: "장난감", price: 5000 },
  { category: "의류", price: 10000 },
];
//myShopping[0].category
function a(b) {
  let sum = 0;
  let rank = "";
  let count = 0;

  //  for(let i of myShopping)도 가능함
  for (i = 0; i < myShopping.length; i++) {
    if (myShopping[i].category === "의류") {
      count += 1;
      sum += myShopping[i].price;
    }
  }
  if (count >= 0 && count <= 2) {
    rank = "브론즈";
  } else if (count >= 3 && count <= 4) {
    rank = "실버";
  } else {
    rank = "골드";
  }
  return `의류를 구매한 횟수는 총${count}회 금액은 ${sum}이며 등급은 ${rank}입니다`;
}

a(myShopping);
// 의류를 구매한 횟수는 총 5회 금액은 57000원이며 등급은 Gold입니다.
