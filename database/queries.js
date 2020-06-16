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

const insertProperty = `
INSERT INTO properties (
  title,
  location,
  description,
  price,
  host)
VALUES (
  );
`;

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