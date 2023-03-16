const express = require('express');
const app = express();
const port = 4000;

app.get('/Homer', (req, res) => {
    res.send("I'm Homer!");
})

app.get('/Marge', (req, res) => {
    res.send("I'm Marge!");
})

app.get('/Bart', (req, res) => {
    res.send("I'm Bart!");
})

app.get('/Lisa', (req, res) => {
    res.send("I'm Lisa!");
})

app.get('/Maggie', (req, res) => {
    res.send("I'm Maggie!");
})

app.get('/Snowball-II', (req, res) => {
    res.send("I'm Snowball-II!");
})

app.get('/Santas-Little-Helper', (req, res) => {
    res.send("I'm Santas-Little-Helper!");
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})