const { createLogin } = require('../service/loginService');

exports.login = async (req, res) => {
    try {

        const { email, password } = req.body;

        const result = await createLogin(email, password);

        res.status(200).json({
            msg: "Login successful",
            success: true,
            data: result
        });

    } catch (error) {

        console.log(error.message);

        res.status(401).json({
            msg: error.message,
            success: false
        });
    }
};