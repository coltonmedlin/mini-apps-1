const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('this works yooooo!!!');
});

app.listen(port, () => {
  console.log(`CSV report generator is listening at http:localhost:${port}`);
});

