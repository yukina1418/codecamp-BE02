const aaa = new Date();

console.log(aaa.getFullYear());
console.log(aaa.getMonth() + 1);

class Monster {
  power = 10;
  hp = 20;

  // 컨스트럭터는 생성자를 이야기한다, 클래스에 인자를 넣었을 경우 컨스트럭터 소괄호 속으로 인자가 들어간다.
  constructor(paramiter, two) {
    if (paramiter) this.power = paramiter;
    if (two) this.hp = two;
  }

  //클래스 속에서는 서로의 메소드를 사용하려면 this.(메소드) 형식으로 사용해야한다.

  attack = () => {
    console.log(`공격하자!!`);
    console.log(`공격하자!! 내 공격력은 ${this.power} 이야!`);
  };

  help = () => {
    console.log(`살려줘 내 생명력이 ${this.hp}밖에 없어!`);
  };

  run = (n) => {
    console.log(`${n}만큼 도망가자!!`);
  };

  jump = () => {
    console.log(`점프하자!!`);
  };
}

const game = new Monster(100, 30);
game.attack();
game.jump();
game.run(5);
game.help();

const game2 = new Monster(50);

game2.attack();
game2.jump();
game2.run(5);
game2.help();
