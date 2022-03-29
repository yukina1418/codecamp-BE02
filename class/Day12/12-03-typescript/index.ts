// 타입스크립트란
// 자바스크립트의 타입을 강제하는 언어

// let profile: Iname = { name: "짱구", age: 20 };

// 타입을 선언하지 않더라도 타입스크립트가 알아서 타입을 추론해서 정해버린다. // 타입추론
let string = "스트링";
// string = 111

// 타입 명시
let aaa: string = "안녕하세요";
let number: number = 10;

// 모든 타입 가능
let any: any = 123;
any = "빠빰";

// 문자 타입
let ccc: string;
ccc = "반가워요";

// 불린 타입
const fire: boolean = true;

// 배열 타입
let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10];
let arr2: string[] = ["a", "b", "c", "d"];
let arr3: (number | string)[] = [12, 3, 4, 5, "123"];

console.log(arr3);
// 객체 타입

interface IProfile {
  name: string;
  age: number | string;
  school: string;
  hobby?: string; // ? 는 있을수도 있고 없을 수도 있다
}

let profile: IProfile = {
  name: "철수",
  age: 8,
  school: "다람쥐초등학교",
};
profile.age = "2살";
profile.hobby = "1";

// 함수 타입 // 인자를 적는 곳 오른쪽에 :를 선언해서 리턴하는 타입을 정한다.

const add = (money1: number, money2: number, unit: string): string => {
  return money1 + money2 + unit;
};

// 타입의 중심은 받는 쪽에서 정한다

add(1000, 3000, "원");
console.log(add(1000, 3000, "원"));
