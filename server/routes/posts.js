//建立Router
const express = require("express");
const router = express.Router(); //產生router物件，並且存入變數
const { Posts } = require('../models') // the js file (= table in database) in the "models" folder

router.get("/", async (req, res) => {
    //res.send("Hello world");
   // res.json("/posts 的 Router")
    const listOfposts = await Posts.findAll();
    //const listOfposts = await Posts.findAll({attributes: ["title","username"]});
    res.json(listOfposts);
});


// post資料到名為“Posts”的table中
router.post("/", async (req, res) => {
    const post = req.body;
    await Posts.create(post);
    res.json(post);

});

module.exports = router;