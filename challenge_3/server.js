const express = require('express');
const app = express();
const port = 1111;

app.use(express.static(__dirname + '/public/'));

app.listen(port, () => {
  console.log(`multiform is running at port:${port}`);
})

