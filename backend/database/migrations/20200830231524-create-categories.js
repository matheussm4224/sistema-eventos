'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('categories', {
     id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
     type: {
       allowNull: false,
       type: Sequelize.STRING
     }
   })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('categories');
  }
};
