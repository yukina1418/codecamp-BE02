function getToday() {
  const aaa = new Date();
  const yyyy = aaa.getFullYear();
  const mm = String(aaa.getMonth() + 1).padStart(2, "0");
  const dd = String(aaa.getDate()).padStart(2, "0");
  const hour = aaa.getHours();
  const min = String(aaa.getMinutes()).padStart(2, "0");
  const sec = String(aaa.getSeconds()).padStart(2, "0");

  const today = `오늘은 ${yyyy}년 ${mm}월 ${dd}일 ${hour}:${min}:${sec} 입니다.`;

  return today;
}

let result = getToday();

console.log(result);
