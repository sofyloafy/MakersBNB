const db = require('./database/queries');
require('dotenv').config();
process.env.NODE_ENV='test'
const { Client } = require('pg');


// beforeAll(() => {
//   // Clears the database and adds some testing data.
//   // Jest will wait for this promise to resolve before running tests.
//   return db.clear().then(() => {
//     return db.insert({testData: 'foo'});
//   });
// });
const client = new Client(
if (process.env.NODE_ENV === 'test'){
 {
  user: 'sophiebrown',
  host: 'localhost',
  database: 'test_makersbnb',
  password: 'password',
  port: 5432
};
}
else {
  console.log("Oops!")
})

