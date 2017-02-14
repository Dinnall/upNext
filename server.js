var express = require('express');
var path = require('path');
var bodyparser = require('body-parser')
var app = express();
var router = require('./routes/index.js')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static('./public'));
app.use('/api',router)
app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
)

app.listen(3000, function() {
  console.log('server started on port 3000')
});
