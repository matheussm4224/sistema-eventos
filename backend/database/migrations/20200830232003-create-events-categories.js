'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.createTable('events_categories', {
       id: {
          primaryKey: true,
          allowNull: false,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4
       },
       eventId: {
         allowNull: false,
         type: Sequelize.INTEGER,
         reference: {
           model: 'events',
           key: 'id'
         }
       },
       categoryId: {
         allowNull: false,
         type: Sequelize.INTEGER,
         reference: {
           model: 'categories',
           key: 'id'
         }
       }
     })
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable('events_categories');
  }
};
