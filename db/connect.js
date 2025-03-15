const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("データベースに接続成功"))
    .catch((err) => {
      console.error("データベース接続エラー:", err);
      throw err;
    });
};

module.exports = connectDB;
