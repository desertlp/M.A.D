const jwt = require("jsonwebtoken");

const authRequired = (req, res, next) => {
  const token = req.headers['authorization']; // get token from broswer
  console.log(req.headers)
  console.log('Verify Token ---> ', token);

  // VERIFY TOKEN
  jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => { // verify is a method from json web token, need our secret to do that 
    if (err || !decodedUser) {
      return res.status(401).json({
        message: 'You are not authorized. Please login and try again'
      });
    }

    // ADD PAYLOAD TO REQ OBJECT
    req.currentUser = decodedUser; // added value of token to request object, value of token is user id


    // ********** --- --- **********
    // CALL NEXT AS MIDDLEWARE FUNCTION
    next(); // next allows us to move onto ccontroller, sending userid with it
  });
}

module.exports = authRequired;

// 