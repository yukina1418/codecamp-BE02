import { express } from "express";
import { ProductController } from "./mvc/controllers/product.controller.js";
import { CouponController } from "./mvc/controllers/coupon.controller.js";

const app = express();

// 상품 api
const productController = new ProductController();
app.post("/products/buy", productController.buyProduct()); // 상품 구매하기 api
app.post("/products/refund", productController.refundProduct()); // 상품 환불하기 api

// 상품권 api
const couponController = new CouponController();
app.post("coupons/buy", couponController.butCoupon()); // 상품권 구매하기

app.listen(3000);
