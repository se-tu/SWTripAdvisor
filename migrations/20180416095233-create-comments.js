'use strict'
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('comments', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
                unique: true,
            },
            planetId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'planets',
                    key: 'id',
                },
            },
            score: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            text: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('comments')
    },
}