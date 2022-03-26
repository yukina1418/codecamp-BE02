import axios from "axios";
import Cheerio from "cheerio";

async function creatBoardAPI(mydata) {
  const targetURL = mydata.contents
    .split(" ")
    .filter((el) => el.startsWith("http"))[0];

  const aaa = await axios.get(targetURL);
  const $ = Cheerio.load(aaa.data);
  $("meta").each((_, el) => {
    if ($(el).attr("property")) {
      const key = $(el).attr("property").split(":")[1];
      const value = $(el).attr("content");
      console.log(key, value);
    }
  });
}

const frontendData = {
  title: "안녕하세요",
  contents:
    " 여기 정말 좋은것 같아요! 한번 꼭 놀러오세요!! 여기가 어디냐면 https://naver.com 이에요!",
};

creatBoardAPI(frontendData);
