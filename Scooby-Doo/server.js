const express = require('express');
const app = express();
const port = 4000;

app.get('/Scrappy', (req, res) => {
    res.send("woof");
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})