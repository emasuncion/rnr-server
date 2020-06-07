const {test, trait} = use('Test/Suite')('User');
const faker = require('faker');
const HttpStatus = require('http-status-codes');

trait('Test/ApiClient');

const testUser = {
  name: faker.random.word(),
  email: 'test@abc.def',
  isAdmin: 'false',
  password: 'password1234!!'
};

const testUserAdmin = {
  name: faker.random.word(),
  email: 'testadmin@abc.def',
  isAdmin: 'true',
  password: 'password1234!!'
};

test('post request with identity payload returns HTTP OK for USER_CREATE',
  async ({client}) => {
    let apiResponse = await client
      .post('/v1/users')
      .send(testUser)
      .end();

    apiResponse = await client
      .post('/v1/users')
      .send(testUserAdmin)
      .end();

    apiResponse.assertStatus(HttpStatus.CREATED);
  });

test('get all users request returns HTTP OK', async ({assert, client}) => {
  const apiResponse = await client
    .get('/v1/users')
    .end();

  assert.isNotEmpty(apiResponse.body.data);
  apiResponse.assertStatus(HttpStatus.OK);
});
