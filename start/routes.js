const Route = use('Route');

Route.get('/', 'AppController.getHealth').prefix('v1');

Route.group(() => {
  Route.resource('users', 'UserController')
    .only(['index', 'store'])
    .validator(new Map([[['store'], ['User/StoreUser']]]));
  Route.resource('nominations', 'NominationController')
    .only(['index', 'store'])
    .validator(new Map([[['store'], ['Nomination/StoreNomination']]]));
  Route.resource('voting', 'VotingController')
    .only(['index', 'store']);
})
  .prefix('v1');

// Route.any('*', ({response}) => response.methodNotAllowed({
//   success: false,
//   message: 'Access Denied',
//   data: null
// }));
