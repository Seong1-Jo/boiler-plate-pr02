const express = require("express");
const app = express();
const port = 5000; //포트 5000번 백서버
const bodyParser = require("body-parser");

const config = require("./config/key");

const { User } = require("./models/User");

//application/x-www-form-urlencoded의 데이터를 분석해서 가져올수 있게 해주는거
app.use(bodyParser.urlencoded({ extended: true }));
//application/json 을 분석해서 가져올수 있게 하는것
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {})
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log("err", err));

app.get("/", (req, res) => {
  res.send("Hello World! 안녕하세요 정말 시작입니다");
}); //간단한 라우터

app.post("/register", (req, res) => {
  //회원가입을 위한 라우터
  //회원 가입 할때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.

  //데이터를 넣기위해서
  const user = new User(req.body);

  //mongoDB에서 오는 메소드
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
