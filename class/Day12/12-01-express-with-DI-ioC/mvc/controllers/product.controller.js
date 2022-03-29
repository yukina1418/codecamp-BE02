// import { ProductService } from "./services/product.service.js";
// import { CashService } from "./services/cash.service.js";

// 원래는 프로덕트컨트롤러는 캐시서비스에 의존하고 있다. 강한 결합이라고도 이야기한다 tight-coupling 이라고 영어로 쓴다

// 그런데 지금은 index.js에서 가져와 사용하므로 의존성을 밖에서 주입하고 있다 (DI)
// 그런 것을 느슨한 결합 loose-coupling 이라 부른다
export class ProductController {
  constructor(moneyService, productService) {
    this.moneyService = moneyService;
    this.productService = productService;
  }
  buyProduct = (req, res) => {
    // 1. 가진 돈을 검증하는 코드 (대략 10줄 정도 => 2줄 => 1줄)
    // const cashService = new CashService();
    const hasMoney = this.moneyService.checkValue(); // true or false return

    // 2. 판매 여부 검증하는 코드 (대략 10줄 정도 => 2줄 => 1줄)
    // const productService = new ProductService();
    const isSoldout = this.productService.checkSoldout(); // true or false return
    // 3. 상품 구매하는 코드
    if (hasMoney && !isSoldout) {
      res.send("상품 구매 완료!!");
    }
  };

  refundProduct = (req, res) => {
    // 1. 판매 여부 검증하는 코드 (대략 10줄 정도 => 2줄 => 1줄)
    // const productService = new ProductService();
    const isSoldout = this.productService.checkSoldout(); // true or false return
    // 2. 상품 환불하는 코드
    if (isSoldout) {
      res.send("상품 환불 완료");
    }
  };
}
