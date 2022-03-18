function sum(num) {
  let str = "1";
  for (let i = 2; i <= num; i++) {
    str = str + "-" + i;
  }
  return str;
}

sum(15);

function sum(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += i;
    if (i !== num) {
      str += "-";
    }
  }
  return str;
}

sum(15);
