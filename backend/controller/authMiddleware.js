const jwt = require('jsonwebtoken');

async function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({
            msg: "Invalid Authorization"
        });
    }

    const token = authHeader.split(" ")[1];
      console.log("Authorization:", req.headers.authorization);
console.log("Token:", token);

    try {
        const { username, userid, email,role } = jwt.verify(token, "securt");

        req.user = {username,userid,email,role
        };

        next();

    } catch (error) {
      console.log("JWT ERROR:", error.message);
    
        return res.status(401).json({
            msg: "Invalid Authorization"
        });
    }
}

module.exports = authMiddleware;