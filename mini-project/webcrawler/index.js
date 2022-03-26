import puppeteer from "puppeteer";
import mongoose from "mongoose";
import { Stock } from "./models/starbucks.model.js";

mongoose.connect("mongodb://localhost:27017/project");

async function startCrawling() {
  const browser = await puppeteer.launch({ headless: true }); // 브라우저가 보이게 한다
  const page = await browser.newPage(); // 새로운 브라우저 켜기
  await page.goto("https://www.starbucks.co.kr/menu/drink_list.do"); // 페이지 이동
  await page.waitForTimeout(1000); // 일정 시간을 두고 접속하기

  for (let i = 1; i <= 10; i++) {
    // 반복문 돌면서 값 여러개 가져오기
    await page.waitForTimeout(500);
    const img = await page.$eval(
      `#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(2) > ul > li:nth-child(${i}) > dl > dt > a > img`,
      (el) => el.src
    );

    const name = await page.$eval(
      `#container > div.content > div.product_result_wrap.product_result_wrap01 > div 
      > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(2) > 
      ul > li:nth-child(${i}) > dl > dd`,
      (el) => el.textContent
    );
    console.log(`${name}`);
    console.log(`${img}`);

    const stock = new Stock({
      name: `${name}`,
      img: `${img}`,
    });
    await stock.save();
  }
}
