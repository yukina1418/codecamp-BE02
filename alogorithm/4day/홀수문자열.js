function makeOdd(num) {
  let str = "";

  for (i = 0; i <= num; i++) {
    if (i % 2 === 1) {
      str = str + i;
    }
  }
  return str;
}

makeOdd(5);

// 아래거는 짝수 문자열

function makeOdd(num) {
  let str = "";

  for (i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      str = str + i;
    }
  }
  return str;
}

makeOdd(5);
