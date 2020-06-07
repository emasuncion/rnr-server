# Rewards & Recognition v2 Server

This project will contain microservices to enable API calls from the Rewards & Recognition Frontend side to do the following:

* Handle API calls from the Frontend side.
* Retrieve users, nominations, votes in the database.
* Create new users, cast nominations and votes to store in the database.
* See the recognitions that colleagues made for one another.

To build the image, run the command below and specify dokcerfile with its corresponding environment

```sh
docker build -t rnr-server-dev -f dockerfiles/Dockerfile-dev .
```

To run the image:

```sh
docker run -i -p 3333:3333 -t  rnr-server-dev:latest
```

The commands stated will update the codebase if there are any changes and run the container after the build process is complete.

* For linting run `yarn lint`
* For local testing you may run `yarn dev`

## In Progress / What's Next
* [] Authentication
* [] User Voting
* [] Nomination Management
* [] User Management
* [] Templates for Swagger
* [] Dockerfiles

Also make sure to read the [guides](https://adonisjs.com/docs) for AdonisJS.
