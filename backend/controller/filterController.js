// controller/userController.js

const { getUsersByUsername } = require('../service/filterService');

exports.filterUsers = async (req, res) => {

    try {

        const username = req.query.username;//or{const {username}=req.query}

        const users = await getUsersByUsername(username);

        res.status(200).json(users);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error getting users"
        });
    }
};