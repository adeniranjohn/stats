const express = require('express');
const entry = express.Router();

entry.get('/',(req, res) => {
    res.send('Entry routes');
})

module.exports = entry;