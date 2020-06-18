const db = require('../database/queries')
describe('Properties', function () {
  // beforeEach(function () {
  var properties = new db.Property()
  var request = { 'body': { title: 'villa', location: 'Valencia', description: 'bla bla', price: 100, host: 'Sophie' } }
  // })
  it('inserts properties into the testdb', function () {
    var result = properties.viewProperties()
    properties.insertProperty(request)
    console.log(result)
    expect(result).toContain(request.body)
  });
});
