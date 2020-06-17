const { Client } = require('pg');

const client = new Client({
    user: 'sophiebrown',
    host: 'localhost',
    database: '\sop',
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

client.query(createTableProperties, (err, res) => {
  if (err) {
      console.error(err);
      return;
  }
  console.log('Data insert successful');
  client.end();
});

