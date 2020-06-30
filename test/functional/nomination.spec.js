const {test, trait} = use('Test/Suite')('Nomination');
const faker = require('faker');
const HttpStatus = require('http-status-codes');

trait('Test/ApiClient');

const testUser = {
  name: faker.random.word(),
  email: 'test@abc.def',
  isAdmin: 'true',
  password: 'password1234!!'
};

const testNomination = {
  user: testUser.name,
  category: 'Value Creator',
  nominee: faker.random.word(),
  description: faker.random.word()
};

test('post request with payload returns HTTP OK for NOMINATION_CREATE',
  async ({assert, client}) => {
    const apiResponse = await client
      .post('/v1/nominations')
      .send(testNomination)
      .end();
    assert.isNotEmpty(apiResponse.body.data);
    apiResponse.assertStatus(HttpStatus.CREATED);
  });

test('get nomination request by filters returns HTTP OK and the filtered body',
  async ({assert, client}) => {
    const apiResponse = await client
      .get('/v1/nominations')
      .query(testNomination)
      .end();
    assert.isNotEmpty(apiResponse.body.data);
    apiResponse.assertStatus(HttpStatus.OK);
  });
