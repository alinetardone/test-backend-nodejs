const { categoriesSchema } = require('../../../database/models')

exports.create = async (product) => {
    
    return await categoriesSchema.create(product)
}

exports.update = async (_id, product) => {
    
    return await categoriesSchema.updateOne({ _id }, product)
}

exports.delete = async (_id) => {

    return await categoriesSchema.findByIdAndDelete(_id)
}

exports.find = async (filter) => {

    return await categoriesSchema.find(filter).sort('description')
}

exports.findOne = async (filter) => {

    return await categoriesSchema.findOne(filter).sort('description')
}