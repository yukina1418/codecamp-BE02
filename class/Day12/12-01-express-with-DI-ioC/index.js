import express from "express";
import { ProductController } from "./mvc/controllers/product.controller.js";
import { CouponController } from "./mvc/controllers/coupon.controller.js";
import { ProductService } from "./mvc/controllers/services/product.service.js";
import { CashService } from "./mvc/controllers/services/cash.service.js";
import { PointService } from "./mvc/controllers/services/point.service.js";

const app = express();

const productService = new ProductService();
const cashService = new CashService(); // new 한번으로 모든곳에서 재사용 가능(싱글톤 패턴)
const pointService = new PointService(); // 제어를 역전시킴, inversion of control ioC

// 싱글톤과 의존성 주입은 별개의 문제다
// nest.js는 기본적으로 싱글톤 패턴이나 설정파일을 변경하여 바꿀 수 있다.

// Spring nest.js 두개를 DI-Framework라고 부른다
// Django 장고는 안댐

// 상품 api
const productController = new ProductController(cashService, productService);
app.post("/products/buy", productController.buyProduct); // 상품 구매하기 api
app.post("/products/refund", productController.refundProduct); // 상품 환불하기 api

// 상품권 api
const couponController = new CouponController(pointService);
app.post("/coupons/buy", couponController.butCoupon); // 상품권 구매하기

app.listen(3000);
