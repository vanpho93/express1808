const express = require('express');

const app = express();

app.get('/hello/:name/:age', (req, res) => {
    const { name, age } = req.params;
    res.send(`Xin chao toi la ${name}, ${age} tuoi`);
});

app.get('/tinh/:tenPhepTinh/:soA/:soB', (req, res) => {
    const { tenPhepTinh, soA, soB } = req.params;
    const pt = new Tinh(tenPhepTinh, soA, soB);
    res.send(pt.getResultString());
});

app.listen(3000);

class Tinh {
    constructor(tenPhepTinh, soA, soB) {
        this.tenPhepTinh = tenPhepTinh;
        this.soA = soA;
        this.soB = soB;
    }

    _getChuoiPhepTinh() {
        const { tenPhepTinh, soA, soB } = this;
        if (tenPhepTinh === 'CONG') return `${soA} + ${soB}`;
        if (tenPhepTinh === 'TRU') return `${soA} - ${soB}`;
        if (tenPhepTinh === 'NHAN') return `${soA} * ${soB}`;
        return `${soA} / ${soB}`;
    }

    getResultString() {
        const chuoiPhepTinh = this._getChuoiPhepTinh();
        const result = eval(chuoiPhepTinh);
        return `${chuoiPhepTinh} = ${result}`;
    }
}
