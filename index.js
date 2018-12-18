const express = require('express');
const app = express();

app.get('/api/whoami', (req, res) => {
  res.status(200).send(JSON.stringify(req.headers));
});

app.listen(3000, () => console.log("service started"));