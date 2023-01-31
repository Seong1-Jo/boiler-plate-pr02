const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, //이메일의 스페이스를 없애주는 역할!!
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    //관리자인지아닌지
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    //token의 유효기간
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User }; //다른곳에서도 쓸수있게 함
