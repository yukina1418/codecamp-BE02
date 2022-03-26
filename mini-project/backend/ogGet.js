import { getWelcomeTemplate, sendTemplateEmail } from "./email.js";

import axios from "axios";
import Cheerio from "cheerio";

export async function ogGet(user) {
  user.includes("http") ? user : (user = "https://" + user);

  let obj = {};
  const page = await axios.get(user);
  const $ = Cheerio.load(page.data);

  $("meta").each((_, el) => {
    if ($(el).attr("property")) {
      const key = $(el).attr("property").split(":")[1];
      const value = String($(el).attr("content"));
      obj[key] = value;
    }
  });

  return obj;
}

export async function emailSend(myuser) {
  const mytemplate = getWelcomeTemplate(
    myuser.name,
    myuser.phone,
    myuser.prefer
  );

  sendTemplateEmail(myuser.email, mytemplate);
}
