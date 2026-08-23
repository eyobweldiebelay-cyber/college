const db = require('../db/dbConfig');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createLogin = async (email, password) => {

    // 1. Find user by email
    const [result] = await db.query(
        `SELECT userid, username, email, role, password
         FROM users
         WHERE email = ?`,
        [email]
    );

    // 2. Check if user exists
    if (result.length === 0) {
        throw new Error("User not found");
    }

    // 3. Get the user
    const user = result[0];

    // 4. Compare entered password with database password
    const isMatch = await bcrypt.compare( password,user.password
    );

    // 5. Password incorrect
    if (!isMatch) {
        throw new Error("Invalid password");
    }

    // 6. Create JWT
    const token = jwt.sign(
        {
            userid: user.userid,
            username: user.username,
            email: user.email,
            role:user.role
        },
       "securt",
        {
            expiresIn: '1h'
        }
    );

    // 7. Send result back to controller
    return {
        message: "Login successful",
        token: token,
        user: {
            userid: user.userid,
            username: user.username,
            email: user.email,
            role:user.role
        }
    };
};

module.exports = {
    createLogin
};