//建立Router
const express = require("express");
const router = express.Router(); //產生router物件，並且存入變數

router.get("/", (req, res) => {
    //res.send("Hello world");
    res.json("This is the router of /posts ")
});

router.post("/", (req, res) => {

})

module.exports = router;