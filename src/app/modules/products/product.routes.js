const express = require('express')
const router = express.Router()

const productController = require('./product.controller')

router.post('/', productController.createProduct)
router.put('/:productId', productController.editProduct)
router.delete('/:productId', productController.deleteProduct)
router.get('/', productController.getProducts)

module.exports = router