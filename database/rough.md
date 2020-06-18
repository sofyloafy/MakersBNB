server.js
const db = require('./queries')

app.get('/homepage', db.viewProperties)
app.get('/newproperty')
app.post('/newproperty', db.insertProperty)




index.html
<form action="/newproperty" method=”POST”>
<input type="text" name="title">
<input type="text" name="location">
<input type="text" name="description">
<input type="text" name="price">
<input type="text" name="host">
<input type="submit" value="Add property">
