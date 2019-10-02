const User = require('../models/Users');

// métodos comuns: index, show, store, update, destroy

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    const user = await User.create({ email });
    
    return res.json({ user });
  }
};