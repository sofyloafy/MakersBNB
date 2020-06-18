const express = require('express')
const db = require('./database/queries')
var bodyParser = require('body-parser')
const app = express()
const port = 4000


app.use(bodyParser.json());

var property = new db.Property()

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {
  response.render('index');
});

app.get('/sign-in', function (request, response) {
  response.render('loginPage')
});

app.get('/profile', function (req, res) {
  property.viewProperties()
  res.render('profile')
});


app.post('/newproperty', function (req) {
  const { title, location, description, price, host } = req.body
  property.insertProperty(title, location, description, price, host)
});



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
