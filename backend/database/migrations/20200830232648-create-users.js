'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      isBlocked: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW 
      },
      deletedAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.dropTable('users');
  }
};
