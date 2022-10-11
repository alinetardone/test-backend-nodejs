const express = require('express')
const router = express.Router()

const categoryController = require('./category.controller')

router.post('/', categoryController.createCategory)
router.put('/:categoryId', categoryController.editCategory)
router.delete('/:categoryId', categoryController.deleteCategory)
router.get('/', categoryController.getCategories)

module.exports = router