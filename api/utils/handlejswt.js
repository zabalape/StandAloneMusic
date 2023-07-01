require('dotenv').config();
const jwt = require('jsonwebtoken');
const JSTK = process.env.JSTK
const getProperties = require('./handleProperties')
const propertiesKey = getProperties();
const tokenSing = async (user) => {
    try {
        const sing = await jwt.sign({
            [propertiesKey.id]: user[propertiesKey.id],
            role: user.role
        }, 
        JSTK, 
        {
            expiresIn: '2h',
        })
        return sing
    } catch (e) {
        console.log(e)
    }
};
const verifyToken = async (jstoken) => {
    try {
        return await jwt.verify(jstoken, JSTK)
    }
    catch (e) {
        return null;
    }
};

module.exports = { tokenSing, verifyToken }