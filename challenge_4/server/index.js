const express = require('express');
const app = express();
const port = 3030;

app.use(express.static('./client/dist/'));


app.listen(port, () => {
  console.log(`connect four app running at port: ${port}}`);
});



