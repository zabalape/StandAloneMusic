require('dotenv').config()
const ENGINE_DB = process.env.ENGINE_DB

const path = ENGINE_DB === 'nosql' ? './nosql' : './sql'



const models = {

    usersModel : require(`${path}/users`),
    tracksModel: require(`${path}/tracks`),
    storageModel: require(`${path}/storage`) 

};



module.exports = models;