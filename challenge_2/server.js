const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const jsonToCsv = require('./middleware/JSONtoCSV.js');
const multer = require('multer');
const upload = multer({dest:'uploads/'});

app.use(express.static('client'));
app.use(bodyParser());
app.set('view engine', 'pug');

app.post('/', upload.single('file'), (req, res) => {
  fs.readFile(req.file.path, 'utf8', (err, contents) => {
    let text = jsonToCsv.jsonToCsv(contents);
    fs.writeFile('./uploads/converted.csv', text, (err) => {
      fs.unlink(req.file.path, (err) => {
        res.end(text.replace(/\n/g, "<br />"));
      });
    });
  });
});

app.get('/file', (req, res) => {
  res.sendFile('/uploads/converted.csv', {root:'.'});
});

app.listen(port, () => {
  console.log(`CSV report generator is listening at http:localhost:${port}`);
});

