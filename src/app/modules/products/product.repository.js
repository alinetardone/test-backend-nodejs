const { productsSchema } = require('../../../database/models')

exports.create = async (product) => {
    
    return await productsSchema.create(product)
}

exports.update = async (_id, product) => {
    
    return await productsSchema.updateOne({ _id }, product)
}

exports.delete = async (_id) => {

    return await productsSchema.findByIdAndDelete(_id)
}

exports.find = async (filter) => {

    return await productsSchema.find(filter).populate('categoryId')
}