const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  try {
    let token;
    // Check Authorization headers
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    //No token
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, no token",
      });
    }

    //verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //Save User id in request
    req.user = {
      id: decoded.id,
    };
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
};

module.exports = protect;
