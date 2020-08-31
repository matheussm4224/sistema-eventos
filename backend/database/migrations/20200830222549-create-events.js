'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('events', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      start: {
        allowNull: false,
        type: Sequelize.DATE
      },
      end: {
        allowNull: false,
        type: Sequelize.DATE
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
      decription: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING(50)
      }, 
      isActive: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      isCancelled: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      limit: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.dropTable('events');
  }
};
