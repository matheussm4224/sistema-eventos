const { users } = require('../models');

class UserController {

	static getUser($req, $res) {
		console.log(users);
		users.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' });
	}

	static postUser($req, $res) {

	}
}

module.exports = UserController; 