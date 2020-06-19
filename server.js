const express = require('express')
const db = require('./database/queries')
const app = express()
const port = 4000

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies



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
  res.render('profile', { homes: property.homes })
});


app.post('/newproperty', function (req, response) {
  const { title, location, description, price, host } = req.body
  // response.send(req.body);
  console.log(req.body)
  property.insertProperty(req)
  response.redirect('/profile')
});



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
