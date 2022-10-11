const mongoose = require('mongoose');

const catalogsSchema = new mongoose.Schema({

    userId: {

        type: Number,
        require: true
    },
    productIds: [{
            type: String,
            ref: "Products",
            require: true
        }]
})

module.exports = mongoose.model('Catalogs', catalogsSchema)