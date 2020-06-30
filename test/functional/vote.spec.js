const {test, trait} = use('Test/Suite')('Vote');
const faker = require('faker');
const HttpStatus = require('http-status-codes');

trait('Test/ApiClient');

const testVote = {
  user: 'Test User',
  category: faker.random.word(),
  votes: [
    faker.random.word(),
    faker.random.word(),
    faker.random.word()
  ],
};

test('post request with payload returns HTTP OK for VOTE_CREATE',
  async ({assert, client}) => {
    const apiResponse = await client
      .post('/v1/voting')
      .send(testVote)
      .end();
    assert.isNotEmpty(apiResponse.body.data);
    apiResponse.assertStatus(HttpStatus.CREATED);
  });

test('get vote request by filters returns HTTP OK and the filtered body',
  async ({assert, client}) => {
    const apiResponse = await client
      .get('/v1/voting')
      .query(testVote)
      .end();
    assert.isNotEmpty(apiResponse.body.data);
    apiResponse.assertStatus(HttpStatus.OK);
  });
