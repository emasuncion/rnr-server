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

test('post request with identity payload returns HTTP OK for USER_CREATE',
  async ({client}) => {
    const apiResponse = await client
      .post('/v1/users')
      .send(testUser)
      .end();
    apiResponse.assertStatus(HttpStatus.CREATED);
  });

test('get all nominations request returns HTTP OK',
  async ({assert, client}) => {
    const apiResponse = await client
      .get('/v1/nominations')
      .end();
    assert.isNotEmpty(apiResponse.body.data);
    apiResponse.assertStatus(HttpStatus.OK);
  });

test('get nominations request by filters returns HTTP OK and the filtered body',
  async ({assert, client}) => {
    const apiResponse = await client
      .get('/v1/nominations')
      .query(testUser)
      .end();
    assert.isNotEmpty(apiResponse.body.data);
    apiResponse.assertStatus(HttpStatus.OK);
  });
