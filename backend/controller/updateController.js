const { updateService } = require('../service/updateService');

const updateUser = async (req, res) => {

    try {

        const { id } = req.params;

        const {
            username,
            email,
            password
        } = req.body;

        const result = await updateService(
            id,
            username,
            email,
            password
        );

        res.status(200).json({
            msg: "Update successful",
            success: true,
            data: result
        });

    } catch (error) {

        console.log(error.message);

        res.status(500).json({
            msg: "Update failed",
            success: false,
            error: error.message
        });
    }
};

module.exports = {
    updateUser
};