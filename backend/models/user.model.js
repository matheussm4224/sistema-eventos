const { v4: uuid } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
  	id: {
  		primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
  		defaultValue: DataTypes.UUIDV4
  	},
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  //User.beforeCreate(user => user.id = uuid());

  return User;
}