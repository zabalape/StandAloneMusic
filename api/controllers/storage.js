const fs = require('fs');
const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH =`${__dirname}/../storage`
const {handleHTTPError} = require('../utils/handlerError')
const {storageModel} = require('../models/index')
const { matchedData } = require('express-validator')
const getProperties = require('../utils/handleProperties')
const propertiesKey = getProperties();

const getItems = async (req, res) => {
    try {  
        const data = await storageModel.find({})
        res.send(data) 
    } catch(e){
        handleHTTPError(res, `error on get items: ${e}`, 500);
    }
}

const getItem = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await storageModel.findById( {'_id': id } )
        res.send(data) 
    }catch(e){
        handleHTTPError(res, `error on get detail: ${e}`, 403)
    }
}

const createItems = async (req, res) => {
    try{
    const {file} = req;
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData);
    res.send({data});
}catch(e){
    handleHTTPError(res, `error on create item: ${e}`, 403)
}
}


const deleteItems = async (req, res) => {
    try{
        
        
        const {id} = matchedData(req);
        // const data = await storageModel.findById( {'_id': id } )
        // const {filename} = data;
        // const filepath = `${MEDIA_PATH}/${filename}`;
        // fs.unlinkSync(filepath)
        const ondelete = await storageModel.delete({'_id': id});
        res.send(ondelete) 
        

    }catch(e){
        handleHTTPError(res, `error on delete item: ${e}`, 403)
    }
}
module.exports = {getItems, getItem, createItems, deleteItems}