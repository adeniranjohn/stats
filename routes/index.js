const express = require('express');
const index = express.Router();

index.get('/',(req, res) => {
    res.status(200).json({"message":"Welcome to Statistics API"});
});






module.exports = index;