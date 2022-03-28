class skyUnit {
  speed = 10;
  hp = 10;
  /// supur키워드를 사용하면 상속된 자식의 컨스트럭쳐에 인자로 사용할 수 있다.
  constructor(a, b) {
    this.speed = a;
    this.hp = b;
  }

  run = () => {
    console.log(`날라서 도망가자!!! ${this.speed} + ${this.hp}`);
  };
}

class GroundUnit {
  run = () => {
    console.log(`뛰어서 도망가자!!`);
  };
}

// extends 는 상속을 할 때 사용하는 키워드

class Monster extends skyUnit {
  power = 10;

  constructor(aaa, bbb) {
    super(aaa, bbb);
  }

  attack = () => {
    console.log("공격하자!");
    console.log(`내 공격력은 ${this.power} 이야!`);
  };
}

const monster1 = new Monster(20, 30);

monster1.attack();
monster1.run();
