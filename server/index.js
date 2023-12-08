//把express套件用進來
const express = require("express");
const app = express();
const cors = require("cors");

//import table "Posts" in './models' into database
app.use(express.json());
app.use(cors());
const db = require("./models");

//Routers
// Require the router module
const postRouter = require("./routes/posts");
// Use the router module
app.use("/posts", postRouter);
//上方"posts"可以任意取名字

const commentsRouter = require("./routes/comments");
app.use("/comments", commentsRouter);

const usersRouter = require("./routes/users.js");
app.use("/auth", usersRouter);

//這意味著當應用程式啟動時，它將開始監聽來自端口 3001 的請求。app.listen() 是用於啟動 Express 應用程式的方法。
db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server is running on port 3001");
  });
});
