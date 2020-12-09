const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('1st AWS thingy!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
