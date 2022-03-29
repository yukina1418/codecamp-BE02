function zzz(aaaaaa) {
  console.log("============");
  console.log(aaaaaa);
  console.log("============");
}

@zzz
class AppController {}

class AAA {
  constructor(public mypower: number) {
    this.mypower = mypower;
  }

  ggg() {
    console.log("안녕하세요" + this.mypower);
  }
}

const aaa = new AAA(50);
aaa.mypower = 5;
aaa.ggg();
class BBB {
  constructor(private mypower: number) {
    this.mypower = mypower;
  }

  ggg() {
    this.mypower = 10;
    console.log("안녕하세요");
  }
}
const bbb = new BBB(50);
// bbb.mypower; // 프라이빗 속성은 클래스 내부에서만 사용할 수 있다.

class CCC {
  constructor(readonly mypower: number) {
    this.mypower = mypower;
  }

  ggg() {
    //   this.mypower = 10;
    console.log("안녕하세요");
  }
}
const ccc = new CCC(50);
//   ccc.mypower = 10
