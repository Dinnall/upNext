var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('./public'));
app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
)

app.listen(8080, function() {
  console.log('server started on port 8080')
});
