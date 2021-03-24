const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.static('client'));
app.use(bodyParser());
app.set('view engine', 'pug');

app.post('/', (req, res) => {
  const text = req.body.textarea;
  res.render('afterSubmission', {csv: text});
});

app.listen(port, () => {
  console.log(`CSV report generator is listening at http:localhost:${port}`);
});

