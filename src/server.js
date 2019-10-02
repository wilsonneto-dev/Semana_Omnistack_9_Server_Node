const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({ message: 'Hello World ok 2' });
})

app.listen(3333);
