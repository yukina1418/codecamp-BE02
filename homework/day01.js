function black(number) {
  let arr = number.split("");
  arr = arr.fill("*", 8, 14);

  a = number.split("-")[0];
  b = number.split("-")[1];
  console.log(a.length);
  console.log(b.length);

  if (a.length !== 6 || b.length !== 7) {
    console.log("에러발생!!!! 갯수를 제대로 입력해주세요!!!!");
  }

  return arr.join("");
}
black("920221-1205429");

/* a = number.split("-")[0]
b = number.split("-")[1]

if (number.includes("-") === false) {
    console.log("에러발생!!!! 형식이 올바르지 않습니다!!!!");
  }  */
