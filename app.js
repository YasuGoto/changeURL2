const express = require("express");
const app = express();
const PORT = 3000;
const connectDB = require("./db/connect");
const tasks = require("./routers/tasks");
require("dotenv").config();

const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/", tasks);

// DB接続、サーバー起動
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("mongoDB接続成功");
    app.listen(PORT, console.log("サーバーが立ち上がりました"));
  } catch (err) {
    console.log(`データベース接続失敗${err}`);
  }
};

start();
