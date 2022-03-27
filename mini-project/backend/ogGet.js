import { getWelcomeTemplate, sendTemplateEmail } from "./email.js";

import axios from "axios";
import Cheerio from "cheerio";

export async function cross(check) {
  let first = check.email.split("@")[0];
  let second = check.email.split("@")[1];

  if (check.name === "") {
    return false;
  } else if (
    check.email.includes("@") === false ||
    first === "" ||
    second === ""
  ) {
    return false;
  } else if (check.personal.length !== 14) {
    return false;
  } else if (check.prefer === "") {
    return false;
  } else if (check.pwd === "") {
    return false;
  } else if (check.phone === "") {
    return false;
  } else {
    return true;
  }
}

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
