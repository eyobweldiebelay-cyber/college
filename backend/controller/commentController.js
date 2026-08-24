const {
    createCommentService,
    getCommentsService
} = require('../service/commentService');


const createComment = async (req, res) => {

    try {

        const sender_id = req.user.userid;
        const sender_role = req.user.role;

        const {receiver_role,message} = req.body;


        if (!receiver_role || !message) {
            return res.status(400).json({
                msg: "Receiver role and message are required"
            });
        }


        // ADMIN can send to MANAGER or USER
        if (sender_role === "admin") {

            if (
                receiver_role !== "manager" && receiver_role !== "user") {
                return res.status(403).json({
                    msg: "Admin can send only to manager or user"
                });
            }
        }


        // MANAGER can send only to USER
        if (sender_role === "manager") {

            if (receiver_role !== "user") {
                return res.status(403).json({
                    msg: "Manager can send only to user"
                });
            }
        }


        // USER cannot send
        if (sender_role === "user") {

            return res.status(403).json({
                msg: "User cannot send comments"
            });
        }


        const result = await createCommentService(sender_id,receiver_role,message);
        return res.status(201).json({
            msg: "Comment sent successfully",
            comment_id: result.insertId
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            msg: "Server error"
        });
    }
};



const getComments = async (req, res) => {

    try {
         console.log("REQ.USER:", req.user);
        console.log("ROLE:", req.user.role);

        const receiver_role = req.user.role;

        const result = await getCommentsService(receiver_role);

        return res.status(200).json(result,
                          
    );


    } catch (error) {

        console.log(error);

        return res.status(500).json({
            msg: "Server error",error
        });
    }
};


module.exports = {
    createComment,
    getComments
};