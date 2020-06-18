const db = require ('../database/queries')
describe('Properties', function(){
  var properties;
  var request;
  beforeEach(function(){
    properties = new Property()
    request = { 'body': { title: 'villa', location: 'Valencia', description: 'bla bla', price: 100, host: 'Sophie' } }
  })
  it('inserts properties into the testdb', function(){
    properties.insertProperty(request)
    expect(properties.viewProperties).
  });
});
