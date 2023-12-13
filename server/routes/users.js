const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
    });
    res.json("SIGN UP SUCCESSUFFLY");
  });
});

/*tell sequelise to the table of Users and find the username column that matches username*/
/*if sequelize cannot fine the usename matched then the user will be empty*/
//compare input password  & user.password from database

// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   const user = await Users.findOne({ where: { username: username } });
//   if (!user) {
//     res.json({ error: "User Doesn't Exist" });
//   } else {
//     bcrypt.compare(password, user.password).then((match) => {
//       if (!match) {
//         res.json({ error: "Wrong Username And Password Combination" });
//       } else {
//         const accessToken = sign(
//           { username: user.username, id: user.id },
//           "importantdata"
//         );
//         res.json({ accessToken });
//       }
//     });
//   }
// });

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: { username: username } });
  if (!user) {
    res.json({ error: "User Doesn't Exist" });
  } else {
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        res.json({ error: "Wrong Username And Password Combination" });
      } else {
        const accessToken = sign(
          { username: user.username, id: user.id }, // Corrected here
          "importantdata"
        );
        res.json(accessToken);
      }
    });
  }
});

module.exports = router;
