const express = require('express');

const app = express();

app.get('/hello/:name/:age', (req, res) => {
    const { name, age } = req.params;
    res.send('Xin chao toi la ' + name + ' ' + age + 'tuoi');
});

app.get('/tinh/:tenPhepTinh/:soA/:soB', require('./controllers/tinhController'));

app.get('*', (req, res) => res.send('Not found'));

app.listen(3000, () => console.log('Server started'));
