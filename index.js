const express = require('express');

const app = express();

// link route

app.get('/hello/:name/:age', (req, res) => {
    const name = req.params.name;
    const age = req.params.age;
    res.send(`Xin chao toi la ${name}, ${age} tuoi`);
});

app.listen(3000);
