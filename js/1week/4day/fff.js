const arr = ["김세준", "백선호", "조아라", "홍재훈"];
function cb(element) {
  return element.includes("조") === true;

  /*
  for (let i = 0; i < arr.length; i++) {
    element = arr[i].includes("조");


    if (element === true) {
      console.log(arr[i] + "이프문");
      return arr[i];
    }
    console.log(arr[i] + "포문");
  }
  console.log(arr[i] + "그밖"); */
}
const result = arr.findIndex(cb);
console.log("결과", result); // 2
