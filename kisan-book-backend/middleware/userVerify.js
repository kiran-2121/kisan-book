const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");

  console.log(token)

  if (!token) {
    return res.status(401).send("Access denied");
  }

  try {
   
    const verified = jwt.verify(token, process.env.SECRET_KEY);
    req.user = verified;
    
    next();
  } catch (error) {
    return res.status(400).send("Invalid token");
  }
};

module.exports = {verifyToken};
