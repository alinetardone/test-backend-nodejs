const mongoose = require('mongoose');

module.exports = {

    catalogsSchema: require('./main/catalogs.model'),
    productsSchema: require('./main/products.model'),
    categoriesSchema: require('./main/categories.model')
}