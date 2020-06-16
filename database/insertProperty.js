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
INSERT INTO properties (
  title,
  location,
  description,
  price,
  host)
VALUES (
  "Beautiful villa",
  "Valencia",
  "Set in the hills and filled with light",
  250,
  "Sophie");
`;

client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data insert successful');
    client.end();
});