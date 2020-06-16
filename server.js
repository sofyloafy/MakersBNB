const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
  response.render('index');
});
