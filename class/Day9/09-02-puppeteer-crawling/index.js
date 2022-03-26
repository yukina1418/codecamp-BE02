import puppeteer from "puppeteer";
import axios from "axios";

async function startCrawling() {
  const browser = await puppeteer.launch({ headless: false }); // 브라우저가 보이게 한다
  const page = await browser.newPage(); // 새로운 브라우저 켜기
  await page.setViewport({ width: 1280, height: 720 }); // 브라우저 크기 설정
  await page.goto("https://www.goodchoice.kr/product/search/2"); // 페이지 이동
  await page.waitForTimeout(1000); // 일정 시간을 두고 접속하기

  // 부모 자식 관계라 포문으로 여러개를 가져올 수 있다.

  const stage = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.name > div > span",
    (el) => el.textContent
  ); // 개발자도구 셀렉터로 값 가져오기
  const location = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.name > p:nth-child(4)",
    (el) => el.textContent
  );
  const price = await page.$eval(
    " #poduct_list_area > li:nth-child(2) > a > div > div.price > p > b",
    (el) => el.textContent
  );
  console.log(stage);
  console.log(location.trim());
  console.log(price);

  await browser.close(); // 브라우저끄기
}

startCrawling();
