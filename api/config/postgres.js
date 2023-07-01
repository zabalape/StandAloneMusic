require('dotenv').config();
const {Sequelize} = require('sequelize');

const {PG_NAME, PG_USER, PG_PASS, PG_HOST} = process.env;

const sequelize = new Sequelize(
    PG_NAME, 
    PG_USER,
    PG_PASS,
    {
        host: PG_HOST,
        dialect: 'postgres',
        logging: false
    }
)

const dbConnectPg = async () => {
    try{
        await sequelize.authenticate();
        console.log('Authentication successful')
    }
    catch(e){
        console.log('pg error connect', e)
    }
}



module.exports={sequelize, dbConnectPg}