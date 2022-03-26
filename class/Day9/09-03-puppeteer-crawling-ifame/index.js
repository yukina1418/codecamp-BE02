import puppeteer from "puppeteer";
import axios from "axios";

async function startCrawling() {
  const browser = await puppeteer.launch({ headless: false }); // 브라우저가 보이게 한다
  const page = await browser.newPage(); // 새로운 브라우저 켜기
  await page.setViewport({ width: 1280, height: 720 }); // 브라우저 크기 설정
  await page.goto("https://finance.naver.com/item/sise.naver?code=005930"); // 페이지 이동
  await page.waitForTimeout(1000); // 일정 시간을 두고 접속하기

  const framePage = await page
    .frames()
    .find((el) => el.url().includes("/item/sise_day.naver?code=005930")); // frames 속에 있는 HTML에 접근하기

  for (let i = 3; i <= 7; i++) {
    // 반복문 돌면서 값 여러개 가져오기
    await page.waitForTimeout(500);
    const date = await framePage.$eval(
      `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(1)`,
      (el) => el.textContent
    );
    const price = await framePage.$eval(
      `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(2) > span`,
      (el) => el.textContent
    );
    console.log(`가격 ${price}`);
    console.log(`날짜 ${date}`);
  }

  await browser.close(); // 브라우저끄기
}

startCrawling();
