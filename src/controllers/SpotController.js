const Spot = require('../models/Spot');

module.exports = {
  async store(req, res) {
    const { filename } = req.file;
    const { company, techs, price } = req.body;

    const { user_id } = req.headers;

    return res.json({ message: 'ok' });
  }
};