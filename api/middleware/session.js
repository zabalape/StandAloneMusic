
const {handleHTTPError} = require('../utils/handlerError')
const {verifyToken} = require('../utils/handlejswt')
const {usersModel} = require('../models/index')
const getProperties = require('../utils/handleProperties')
const propertiesKey = getProperties();




const authMiddleware = async (req, res, next) => {

    try{

        if(!req.headers.authorization){
            handleHTTPError(res, 'not authorized', 401)
        }

        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token)

        if(!dataToken){
            handleHTTPError(res, 'not payload', 401)
            return;
        }
        const query = {
            [propertiesKey.id]:dataToken[propertiesKey.id]
        }
        const user = await usersModel.findOne(query)
        req.user = user
        next();

    }
    catch(e){
        handleHTTPError(res, ' unauthorized', 401)
    }
}

module.exports = authMiddleware;