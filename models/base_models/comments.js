'use strict'
module.exports = (sequelize, DataTypes) => {
    var Comments = sequelize.define('comments', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        planetId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'planets',
                key: 'id',
            },
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        timestamps: false
    })
    Comments.associate = function (models) {
        // associations can be defined here
    }
    return Comments
}