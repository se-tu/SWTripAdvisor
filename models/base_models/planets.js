'use strict'
module.exports = (sequelize, DataTypes) => {
    var Planets = sequelize.define('planets', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        swapi_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {type: DataTypes.TEXT, allowNull: false},
        rotation_period: {type: DataTypes.TEXT, allowNull: false},
        orbital_period: {type: DataTypes.TEXT, allowNull: false},
        diameter: {type: DataTypes.TEXT, allowNull: false},
        climate: {type: DataTypes.TEXT, allowNull: false},
        gravity: {type: DataTypes.TEXT, allowNull: false},
        terrain: {type: DataTypes.TEXT, allowNull: false},
        surface_water: {type: DataTypes.TEXT, allowNull: false},
        population: {type: DataTypes.TEXT, allowNull: false},
        residents: {type: DataTypes.ARRAY(DataTypes.TEXT), allowNull: false},
        films: {type: DataTypes.ARRAY(DataTypes.TEXT), allowNull: false},
        created: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        edited: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false},
        url: {type: DataTypes.TEXT, allowNull: false},
    }, {
        timestamps: false
    })
    Planets.associate = function (models) {
    }
    return Planets
}