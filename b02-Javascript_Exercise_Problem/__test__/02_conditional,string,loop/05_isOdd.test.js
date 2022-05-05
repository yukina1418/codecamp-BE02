const isOdd = require("../../02_conditional,string,loop/05_isOdd");

describe("isOdd", () => {
  test("If 10 is given, it should return '홀수가 아닙니다'", () => {
    expect(
      isOdd(10)
    ).toEqual('홀수가 아닙니다')
  })

  test("If 3 is given, it should return 3", () => {
    expect(
      isOdd(3)
    ).toEqual(true)
  })
})