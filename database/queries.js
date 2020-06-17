require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
    user: 'sophiebrown',
    host: 'localhost',
    database: 'makersbnb',
    password: 'password',
    port: 5432,
});

client.connect();

const createTableProperties = `
CREATE TABLE properties (
    title varchar(60),
    location varchar,
    description varchar,
    price int,
    host varchar
);
`;

const insertProperty = (request, response) => {
  console.log("Hello world")
  const { title, location, description, price, host} = request.body

  client.query('INSERT INTO properties (title, location, description, price, host) VALUES ($1, $2, $3, $4, $5)',
  [title, location, description, price, host], (error, results) => {
    if (error) {
      throw error
    }
    // response.status(201).send(`Property added with ID: ${results.rows[0].id}`)
    console.log("Hello world")
  })
}

const request = {'body':{title: 'villa', location: 'Valencia', description: 'bla bla', price: 100, host: 'Sophie'}}

// (insertProperty({body}));

// insertProperty(request)
// console.log(request.body)


const viewProperties = (request, response) => {
    client.query('SELECT * FROM properties', (error, results) => {
      if (error) {
        throw error
      }
      console.log(results.rows[0].title)
    })
  }


// client.query(insertProperty(), (err, res) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   client.end();
// });



module.exports = {
    viewProperties,
    insertProperty,
    createTableProperties,
    client,
  }
