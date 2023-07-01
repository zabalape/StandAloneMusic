const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/session')
const uploadMiddleware = require('../utils/handleStorage')
const { createItems, getItems, getItem, deleteItems} = require('../controllers/storage')
const { validatorGetItem } = require('../validator/storage');
router.get('/', authMiddleware, getItems);
router.get('/:id', authMiddleware, validatorGetItem, getItem);
router.post('/', authMiddleware, uploadMiddleware.single('myfile'), createItems);
router.delete('/:id', authMiddleware, validatorGetItem, deleteItems);

module.exports = router;