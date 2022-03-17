function days(num) {
  if (
    num === 1 ||
    num === 3 ||
    num === 5 ||
    num === 7 ||
    num === 8 ||
    num === 10 ||
    num === 12
  ) {
    console.log(31);
  } else if (num === 2) {
    console.log(28);
  } else if (num === 4 || num === 6 || num === 9 || num === 11) {
    console.log(30);
  } else {
    console.log("올바른 달을 입력해주세요.");
  }
}
days(1);
days(2);
days(4);
