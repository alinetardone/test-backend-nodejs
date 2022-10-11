const productRoute = require('../modules/products/product.routes')
const catalogRoute = require('../modules/catalogs/catalog.routes')
const categoryRoute = require('../modules/categories/category.routes')

module.exports = app => {

    app
        .use('/products', productRoute)
        .use('/catalogs', catalogRoute)
        .use('/categories', categoryRoute)
}