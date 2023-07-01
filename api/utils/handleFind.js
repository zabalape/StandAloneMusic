require('dotenv').config()
const ENGINE_DB = process.env.ENGINE_DB

/**
 * Recibe un modelo y devuelve el objeto dependiendo la db a la que estes conectado;
 * @param {*} model 
 */

const handleFind = (model) => {

    if(ENGINE_DB === 'nosql'){
        return model.find({})
    }
    return mode.findAll()
}


module.exports=handleFind;