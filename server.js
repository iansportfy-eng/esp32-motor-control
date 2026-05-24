const express = require('express');
const app = express();

let motorSpeed = 0;

app.use(express.static('public'));

app.get('/setSpeed', (req, res) => {
    motorSpeed = parseInt(req.query.value);
    console.log("Speed:", motorSpeed);
    res.send("OK");
});

app.get('/getSpeed', (req, res) => {
    res.send(String(motorSpeed));
});

app.listen(3000, () => {
    console.log('Server running');
});
