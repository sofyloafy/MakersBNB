const express = require('express')
const app = express()
const port = 4000

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {
  response.render('index');
});

app.get('/sign-in', function (request, response) {
  response.render('loginPage')
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
