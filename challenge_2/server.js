const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.static('client'));
app.use(bodyParser());

app.post('/', (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`CSV report generator is listening at http:localhost:${port}`);
});

