const express = require('express');

const router = express.Router();

const authMiddleware = require('../controller/authMiddleware');

const authorize = require('../controller/authRole');

const {
    createComment,
    getComments
} = require('../controller/commentController');


// Send comment
router.post(
    '/comments',
    authMiddleware,
    authorize("admin","manager"),
    createComment
);


// Read comments
router.get('/comments',
    authMiddleware,
    authorize("admin","manager", "user"),
    getComments
);


module.exports = router;