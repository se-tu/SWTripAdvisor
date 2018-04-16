'use strict'
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('planets', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                unique: true
            },
            swapi_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            name: {type: Sequelize.TEXT, allowNull: false},
            rotation_period: {type: Sequelize.TEXT, allowNull: false},
            orbital_period: {type: Sequelize.TEXT, allowNull: false},
            diameter: {type: Sequelize.TEXT, allowNull: false},
            climate: {type: Sequelize.TEXT, allowNull: false},
            gravity: {type: Sequelize.TEXT, allowNull: false},
            terrain: {type: Sequelize.TEXT, allowNull: false},
            surface_water: {type: Sequelize.TEXT, allowNull: false},
            population: {type: Sequelize.TEXT, allowNull: false},
            residents: {type: Sequelize.ARRAY(Sequelize.TEXT), allowNull: false},
            films: {type: Sequelize.ARRAY(Sequelize.TEXT), allowNull: false},
            created: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
                allowNull: false
            },
            edited: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
                allowNull: false},
            url: {type: Sequelize.TEXT, allowNull: false},
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('planets')
    },
}