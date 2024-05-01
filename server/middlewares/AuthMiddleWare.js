//This file is used to grab the token that is sent through the front-end and verify the validation
//Using JWT function named verify to make the toke validation
// varify the request before the request happens (such as leaving a comment)
const { verify } = require("jsonwebtoken");
const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");
  if (!accessToken) res.json({ error: "User not logged in!!" });
  try {
    const validToken = verify(accessToken, "importantdata");
    //const username = vaildToken.username;
    req.user=validToken;    
    //user is an object contains username and id  

    if (validToken) {
      return next();
    }
  } catch (err) {
    res.json({ error: err });
  }
};

module.exports = { validateToken };
