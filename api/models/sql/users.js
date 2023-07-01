const {sequelize} = require('../../config/postgres');
const { DataTypes } = require('sequelize');

const Users = sequelize.define('users',{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    age:{
        type: DataTypes.INTEGER
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    role:{
        type: DataTypes.ENUM(['user', 'admin'])
    }},{
        timestamps: true
    })

    Users.sync();


module.exports = Users;