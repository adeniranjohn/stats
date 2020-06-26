const express = require('express');
const indexRouter = require('./routes/index');
const entryRouter = require('./routes/entry');
const resultRouter = require('./routes/result');
const port = 3200
const app = express();
app.use(express.json());

app.use('/', indexRouter);
app.use('/entry', entryRouter);
app.use('/result', resultRouter);




app.listen(port , (req, res) => {
    console.log(`https://localhost:${port}`);
    console.log((new Date()).toLocaleString());
})

