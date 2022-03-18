// 객체를 순회하며 key가 title이거나
// name일 경우 value를 대문자로 바꿔주세요.

const obj = {
  title: "The Title",
  name: "Jane",
  contents: "Nothing to say",
};

for (let key in obj) {
  if (key === "title" || key === "name") {
    obj.title = obj.title.toUpperCase();
    obj.name = obj.name.toUpperCase();
  }
}

console.log(obj);

// 만약 키의 이름이 타이틀이거나 네임일 경우에
// 해당하는 키를 가진 value의 값을 대문자로 바꿔준다.
// {
//   title : "THE TITLE",
//   name : "JANE",
//   contents: "Nothing to say"
// // }
// for (let key in obj) {
//   if (key === "title" || key === "name") {
//      obj[key] = obj[key].toUpperCase();
//   }
// }
