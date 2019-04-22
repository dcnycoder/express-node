const express = require('express');
const app = express();

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', function(req, res) {
  console.log(`REQ: ${req}`);
  res.send(`
  <html>
  <head>
    <title>My site</title>
  </head>
  <body>
    <h1>Nike. Just Always Be Coding.</h1>
  </body>
 </html>
  `)

})
