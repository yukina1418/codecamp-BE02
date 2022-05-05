/* 

    문제
    
    이름 정보를 관리할 수 있는 객체 지향을 직접 만들어봅시다.
    myName 함수에는 사용자의 이름을 나타내는 user 이 매개변수가 문자열로 주어지고,
    이 유저가 변경할 이름을 나타내는 문자열 데이터 changeName 이 옵션으로 주어집니다.

    user 매개변수는 필수적으로 객체 지향에서 name 의 이름으로 선언되어야 하며,
    changeName 이 주어질 경우에는 기존의 name 의 데이터를 changeName 으로 변경해서
    최종적으로 담겨진 name 데이터를 리턴해주세요.


    !! 반드시 객체 지향 프로그래밍을 이용해 문제를 풀이해주세요.
    !! OOP (객체 지향 프로그래밍)을 사용하기 위해 어떤 것들이 필요한지 고민해보세요.
    !! 반드시 myName 가 리턴하는 데이터가 객체 지향의 결과값이여야 합니다.

    ----

    입력 예시

    1. myName("철수")

    2. myName("철수", "훈이")

    ----

    출력 예시

    1.  철수

    2.  훈이

*/

function myName(user, changeName) {
  // 여기에 코드를 작성하세요.
  function OOP(user) {
    this.name = user;

    this.changeName = function (name) {
      this.name = name;
    };
  }

  const my = new OOP(user);
  if (!changeName) {
    return my.name;
  } else {
    my.changeName(changeName);
    return my.name;
  }
}

module.exports = myName;
