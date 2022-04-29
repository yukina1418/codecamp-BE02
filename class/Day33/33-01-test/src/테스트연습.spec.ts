// 1. 한개 테스트 하기
it('더하기 테스트', () => {
  const a = 1;
  const b = 2;

  expect(a + b).toBe(3);
});

// 2. 여러개 묶음으로 테스트하기
describe('나만의 테스트 그룹', () => {
  it('더하기 테스트', () => {
    const a = 1;
    const b = 2;

    expect(a + b).toBe(3);
  });

  it('곱하기 테스트', () => {
    const a = 1;
    const b = 2;

    expect(a * b).toBe(2);
  });
});

// 3. 상품 구매하기 테스트 예제

describe('상품 구매 테스트', () => {
  beforeEach(() => {
    //로그인 로직 작성
    false;
  });
  // beforeEach를 쓰면 모든 테스트중 우선순위가 된다

  it('돈 검증', () => {
    const result = true; // 돈이 충분함
    expect(result).toBe(true);
  });

  it('상품 구매하기', () => {
    const result = true;
    expect(result).toBe(true);
  });
});
