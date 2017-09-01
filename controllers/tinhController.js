const Tinh = require('../models/Tinh');

module.exports = (req, res) => {
    const { tenPhepTinh, soA, soB } = req.params;
    const pt = new Tinh(tenPhepTinh, soA, soB);
    res.send(pt.getResultString());
};
