const express = require('express');
require('dotenv').config();

const port = process.env.PORT;

const app = express();

app.get("/server",(req, res)=> {
    res.send("i am from my portal server");
});

app.use('/', express.static('public'));

app.listen(port,()=> {
    console.log(`Server running on port:${port}`);
});