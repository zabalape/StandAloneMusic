const express = require('express');
const authMiddleware = require('../middleware/session')
const checkRole = require('../middleware/role')
const { getItems, getItem, createItems, updateItems, deleteItems } = require('../controllers/tracks');
const router = express.Router();
const {validatorCreateItem, validatorGetItem} = require('../validator/tracks')
router.get('/', authMiddleware, getItems)
router.get('/:id', authMiddleware, validatorGetItem, getItem)
router.post('/', authMiddleware, checkRole(['admin']), validatorCreateItem, createItems)
router.put('/:id', authMiddleware, validatorGetItem, validatorCreateItem, updateItems)
router.delete('/:id', authMiddleware, validatorGetItem, deleteItems)

module.exports = router;