for (i = 0; i < a.length; i++) {
  let arr = a[i].split("");
  console.log(arr[0].charCodeAt());
  if (arr[0].charCodeAt() >= 48 && arr[0].charCodeAt() <= 57 === false) {
    arr[0] = arr[0].toUpperCase();
    for (let j = 1; j < arr.length; j++) {
      arr[j] = arr[j].toLowerCase();
    }
  } else {
    for (let j = 1; j < arr.length; j++) {
      arr[j] = arr[j].toLowerCase();
    }
  }

  New.push(arr.join(""));
}
