const express = require('express');
const result = express.Router();

result.get('/',(req, res) => {
    res.send('Result routes');
})

module.exports = result;