const express = require('express')
const router = express.Router()

const catalogController = require('./catalog.controller')

router.post('/user/:userId', catalogController.createCatalog)
router.put('/:catalogId', catalogController.editCatalog)
router.delete('/:catalogId', catalogController.deleteCatalog)
router.delete('/:catalogId/product/:productId', catalogController.deleteProductInCatalog)
router.get('/', catalogController.getCatalogs)
router.get('/user/:userId', catalogController.getCatalogByUserId)

module.exports = router