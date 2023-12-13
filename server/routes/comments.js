const express = require("express");
const router = express.Router(); //產生router物件，並且存入變數
const { Comments } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleWare");

router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const comments = await Comments.findAll({ where: { postId: postId } });
  //go to the Comments table and find the rows in the column named postId that matches postId we fetched
  res.json(comments);
});
router.post("/", validateToken, async (req, res) => {
  const comment = req.body;
  await Comments.create(comment);
  res.json(comment);
});

module.exports = router;
