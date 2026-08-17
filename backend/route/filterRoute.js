// route/userRoute.js

const express = require('express');

const router = express.Router();

const { filterUsers } = require('../controller/filterController');

router.get('/filter', filterUsers);

module.exports = router;