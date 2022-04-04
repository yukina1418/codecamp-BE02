class human {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  name() {
    console.log(`내 이름은 ${this.a}입니다.`);
  }

  age() {
    console.log(`내 나이는 ${this.b}살입니다`);
  }

  height() {
    console.log(`내 키는 ${this.c}cm 입니다.`);
  }
}

const human1 = new human("짱구", 8, 134);
human1.name();
human1.age();
human1.height();
