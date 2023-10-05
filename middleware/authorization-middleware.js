var jwt = require("jsonwebtoken");

const jwtTestingSign = "secret";

const authorizationHeader = (allowedRole) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      res.status(401).json({
        message: "Token is not available",
      });
    } else {
      const token = authHeader.split(" ")[1];

      try {
        const decodeToken = jwt.verify(token, jwtTestingSign);

        //Check if a role is allowed
        if (
          allowedRole.includes(decodeToken.role) ||
          allowedRole === decodeToken.role
        ) {
          next();
        } else {
          res.status(401).json({
            message: "Unauthorized",
          });
        }
      } catch (error) {
        res.status(400).json({
          message: "error",
          error: error,
        });
      }
    }
  };
};
