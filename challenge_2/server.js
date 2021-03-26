const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const jsonToCsv = require('./middleware/JSONtoCSV.js');

app.use(express.static('client'));
app.use(bodyParser());
app.use(jsonToCsv.jsonToCsv);
app.set('view engine', 'pug');

app.post('/', (req, res) => {
  const text = req.body.csv;
  res.render('afterSubmission', {csv: text});
});

app.listen(port, () => {
  console.log(`CSV report generator is listening at http:localhost:${port}`);
});

