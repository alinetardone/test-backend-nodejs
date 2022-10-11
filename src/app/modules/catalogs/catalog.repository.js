const { catalogsSchema } = require('../../../database/models')

exports.create = async (catalog) => {
    
    return await catalogsSchema.create(catalog)
}

exports.update = async (_id, catalog) => {
    
    return await catalogsSchema.updateOne({ _id }, catalog)
}

exports.delete = async (_id) => {

    return await catalogsSchema.findByIdAndDelete(_id)
}

exports.deleteByFilter = async (catalogId, productId) => {

    return await catalogsSchema.updateOne({ _id: catalogId }, { $pull: { productIds: productId } })
}

exports.find = async (filter) => {

    return await catalogsSchema.find(filter).populate('productIds._id')
}