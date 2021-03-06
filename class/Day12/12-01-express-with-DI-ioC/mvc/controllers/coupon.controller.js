export class CouponController {
  constructor(moneyService) {
    this.moneyService = moneyService;
  }
  butCoupon = (req, res) => {
    // 1. 가진 돈을 검증하는 코드 (대략 10줄 정도 => 2줄)
    // const cashService = new CashService();
    const hasMoney = this.moneyService.checkValue(); // true or false return

    // 2. 쿠폰을 구매하는 코드
    if (hasMoney) {
      res.send("쿠폰 구매 완료");
    }
  };
}
