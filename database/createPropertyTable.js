const { Client } = require('pg');

const client = new Client({
    user: 'sophiebrown',
    host: 'localhost',
    database: 'makersbnb',
    password: 'password',
    port: 5432,
});

client.connect();

const query = `
CREATE TABLE properties (
    title varchar(60),
    location varchar,
    description varchar,
    price int,
    host varchar
);
`;

client.query(query, (err, res) => {
  if (err) {
      console.error(err);
      return;
  }
  console.log('Table is successfully created');
  client.end();
});