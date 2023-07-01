const express = require('express');
const router = express.Router();
const getDocs = require('../controllers/docs')
router.get('/',getDocs);

module.exports=router;