const db = require('./database/queries');


beforeAll(() => {
  // Clears the database and adds some testing data.
  // Jest will wait for this promise to resolve before running tests.
  return db.clear().then(() => {
    return db.insert({testData: 'foo'});
  });
});

