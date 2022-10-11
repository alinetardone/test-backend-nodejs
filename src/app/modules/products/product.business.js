const repositories = require('./product.repository')
const categoryRepository = require('../categories/category.repository')
const setFilter = require('../../services/filter.service')
const { errors } = require('../../services/error.service')

//Business: Camada de negócios -> faz as validações e chama o banco de dados (repository)
exports.createProduct = async (product) => {

    try {

        const productCreated = await repositories.create(product)

        if (!productCreated) {

            throw errors.internalServerError(`Houve um erro ao cadastrar o produto`)
        }

        return productCreated

    } catch (error) {

        throw error
    }
}

exports.editProduct = async (productId, product) => {

    try {

        const productEdited = await repositories.update(productId, product)

        if (!productEdited) {

            throw errors.internalServerError(`Houve um erro ao editar o produto`)
        }

        return productEdited

    } catch (error) {

        throw error
    }
}

exports.deleteProduct = async (productId) => {

    try {

        const productDeleted = await repositories.delete(productId)

        if (!productDeleted) {

            throw errors.internalServerError(`Houve um erro ao excluir o produto`)
        }

        return productDeleted

    } catch (error) {

        throw error
    }
}

exports.getProducts = async (queries) => {

    try {

        var defaultFilter = {}

        if (queries.category) {

            var category = await categoryRepository.findOne({ "description": queries.category })
            defaultFilter = { "categoryId": category?._id }
        }

        var {filter} = setFilter.letFilter(queries, ['title', 'category'], defaultFilter)

        const products = await repositories.find(filter)

        if (!products) {

            throw errors.notFound(`Nenhum produto foi encontrado`)
        }

        return products

    } catch (error) {

        throw error
    }
}
exports.getProductById = async (productId) => {

    try {

        const product = await repositories.findOne({productId})

        if (!product) {

            throw errors.notFound(`Nenhum produto foi encontrado`)
        }

        return product

    } catch (error) {

        throw error
    }
}