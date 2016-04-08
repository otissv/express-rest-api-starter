# Express Rest API Starter  

Project starter for express api server.

Includes:

- [Node](https://nodejs.org/en/)
- [Express](http://expressjs.com/)
- [MongoDB](https://www.mongodb.org/)
- [Redis](http://redis.io/)
- [JSON Web Token](https://jwt.io/)
- [Babel - ES6]( https://babeljs.io/)
- [Tape](https://github.com/substack/tape)
- [Rest](https://en.wikipedia.org/wiki/Representational_state_transfer)

## Usage

1 . Clone the repo.

```
$ git clone https://github.com/otissv/express-rest-api-starter.github
```

2 . cd into the cloned directory and install the packages

```
$ npm install
```

3 . Start the server
```
npm starter
```

### Routes

Registers a new user - signup.

```
http://localhost:8000/api/v01/register?username=janedoe&passoword=xyz
```

Authenticates a user - login.
```
http://localhost:8000/api/v01/authenticate
```

Unauthenticates a user - logout.
```
http://localhost:8000/api/v01/unauthenticate/?_id=57079035be52410d7ec21dc0
```

Access authorsied routes
```
http://localhost:8000/api/v01/users?token=genrated_token_return_from_register_or_authentica_route
```

## Configuration

Configuration settings can be found in ./backend/env of the project root directory.

## Tests

Runs tests on all files ending in *-test.js from the __tests__ of the project root directory.

Run test `npm tests`  
Watch tests `npm run tests:watch`  
Run tests with spec `npm run test:spec`  

## Todo
- Write tests


## License
MIT
