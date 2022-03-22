function takeRank(arr) {
  let i = 0;
  let answer = Array.from({ length: arr.length }, () => 1);
  while (i < arr.length) {
    arr.map((a, b) => {
      return arr[b] > arr[i] ? answer[i]++ : arr;
    });
    i += 1;
  }
  return answer;
}
