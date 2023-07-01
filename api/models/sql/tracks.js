const {sequelize} = require('../../config/postgres');
const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const Storage = require('./storage')
const Tracks = sequelize.define('tracks',{
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
      },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    album:{
        type: DataTypes.STRING
    },
    cover:{
        type: DataTypes.STRING,
        allowNull: false
    },
    artist_name: {
        type: DataTypes.STRING
    },
    artist_nickname: {
            type: DataTypes.STRING
        },
    artist_nationality: {
            type: DataTypes.STRING
        },
    duration_start: {
            type: DataTypes.STRING
        },
    duration_end: {
            type: DataTypes.STRING
        },
    mediaId: {
        type: DataTypes.UUID    
    }
},{
        timestamps: true
    })

    Tracks.belongsTo(Storage, { foreignKey: 'mediaId', as: 'audio' });

    Tracks.findAllData = function (){
            return Tracks.findAll({include:'audio'});
        }
    Tracks.findOneData = function (id) {
        return Tracks.findOne({where:{id}, include:'audio'})
    }
        

    Tracks.sync();


module.exports = Tracks;