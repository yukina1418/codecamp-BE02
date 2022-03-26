// 인자로 받은 문자열을 분류해서 기존에 있는 컬렉션에 개수를 더해주는 함수를 만들어 주세요.

function classification(str) {
  let map = new Map([
    ["A", 1],
    ["B", 2],
    ["C", 3],
  ]);
  // Map객체의 메서드를 사용해보세요.
  str
    .split("")
    .forEach((ele) => (map.has(ele) ? map.set(ele, map.get(ele) + 1) : false));

  return map;
}
var str = "ABCCCAA";
classification(str); //Map(3){'A' => 4, 'B' => 3, 'C' => 6}
