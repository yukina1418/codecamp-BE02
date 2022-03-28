// import { User } from "../../models/user.model.js";
// import { Phone } from "../../models/token.model.js";

import mongoose from "mongoose";

export class UserController {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }
  PostUser = async (req, res) => {
    const user = req.body.user;

    const Token = await Phone.findOne({ phone: `${user.phone}` }).exec();

    if (Token === null || Token.isAuth === false) {
      res.status(422).send("에러!! 핸드폰 번호가 인증되지 않았습니다.");
    } else {
      //   const obj = await ogGet(user.prefer);
      //   user.og = obj;
      user.personal = user.personal.split("").fill("*", 7).join("");

      const Users = new User({
        ...req.body.user,
      });

      await Users.save();
      await emailSend(user);
      const id = await User.findOne({ phone: `${user.phone}` }).exec();
      res
        .status(201)
        .send(`가입 완료! ${user.name}님의 ID는 ${id._id} 입니다.`);
    }
  };

  GetUser = async (req, res) => {
    const result = await User.find();
    res.send(result);
  };
}
