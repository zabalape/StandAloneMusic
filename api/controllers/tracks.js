const {handleHTTPError} = require('../utils/handlerError')
const {tracksModel} = require('../models/index')
const { matchedData } = require('express-validator')

const getItems = async (req, res) => {
  try {  
    const data = await tracksModel.findAllData({})
    res.send(data) 
} catch(e){console.log(e)
    handleHTTPError(res, `error on get items: ${e}`, 500);
}
}

const getItem = async (req, res) => {
try{
    
    req = matchedData(req);
    const {id} = req;
    const data = await tracksModel.findOneData(id)
    res.send(data) 
}catch(e){
    handleHTTPError(res, `error on get detail: ${e}`, 403)
}
}

const createItems = async (req, res) => {
   try{ 
     
    const body= matchedData(req);
    const data = await tracksModel.create(body);
    res.send({data});
   }catch(e){ handleHTTPError(res, `error on create items: ${e}`, 500);}
}

const updateItems = async (req, res) => {
    try {
      const { id, ...body } = matchedData(req);
      const filter = { _id: id }; // Create an object with the _id field
  
      const data = await tracksModel.findOneAndUpdate(filter, body);
      res.send(data);
    } catch (e) {
      handleHTTPError(res, `error on update items: ${e}`, 500);
    }
  };
const deleteItems = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.delete( {'_id': id } )
      
        res.send(data) 
    }catch(e){
     
        handleHTTPError(res, `error on delete item: ${e}`, 403)
    }
}
module.exports = {getItems, getItem, createItems, updateItems, deleteItems}