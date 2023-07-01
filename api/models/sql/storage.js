const {sequelize} = require('../../config/postgres');
const { DataTypes } = require('sequelize');

const { v4: uuidv4 } = require('uuid');
const Storage = sequelize.define('storage',{
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
      },
    url:{
        type: DataTypes.STRING,
    },
    filename: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: true
})

    Storage.sync();

module.exports = Storage;