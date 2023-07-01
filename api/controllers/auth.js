
const { matchedData } = require('express-validator')
const {tokenSing} = require('../utils/handlejswt')
const {usersModel} = require('../models/index')
const {encrypt, compare} = require('../utils/handlePass')
const {handleHTTPError} = require('../utils/handlerError')

const loginController = async (req, res) => {
try{
    req = matchedData(req);
    const user = await usersModel.findOne({email:req.email});
    if(!user){
        handleHTTPError(res, 'User not found', 404)
        return;
    }
    const hash = user.password;
    const check = await compare(req.password, hash);
    if(!check){
        handleHTTPError(res, 'Password incorrect', 401)
    }
    user.set('password', undefined, {strict:false})
    const data = {
        token : await tokenSing(user),
        user
    }
    res.send(data)
}catch (e) {
    console.log(e)
    handleHTTPError(res, `error on login user: ${e}`, 403)
}
}

const registerController = async (req, res) => {
    try{req = matchedData(req);
    const hash = await encrypt(req.password)
    const body = {...req, password: hash}
    const dataUser = await usersModel.create(body)
    dataUser.set('password', undefined, {strict:false})
    const data = {
        token: await tokenSing(dataUser),
        user: dataUser
    }    
    res.send({data});
}catch (e) {
    console.log(e)
    handleHTTPError(res, 'error on register user', 403)
}
}


module.exports={loginController, registerController}