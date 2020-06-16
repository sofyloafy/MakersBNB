const { Client } = require('pg');

const client = new Client({
    user: 'student',
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
  const { title, location, description, price, host} = request.body

  pool.query('INSERT INTO properties (title, location, description, price, host) VALUES ($1, $2, $3, $4, $5)',
  [title, location, description, price, host], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Property added with ID: ${results.rows[0].id}`)
  })
}
//${result.insertId}


// const insertProperty = `
// INSERT INTO properties (
//   title,
//   location,
//   description,
//   price,
//   host)
// VALUES (
//   );
// `;

const viewProperties = (request, response) => {
    pool.query('SELECT * FROM properties', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


client.query(viewProperties, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  client.end();
});


module.exports = {
    viewProperties,
    insertProperty,
    createTableProperties,
    client,
  }


console.log(module)
