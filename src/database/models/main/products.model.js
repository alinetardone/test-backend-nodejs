const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({

    title: {

        type: String,
        require: true
    },
    description: {

        type: String,
        require: true
    },
    price: {

        type: Number,
        require: true
    },
    categoryId: {

        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories",
        require: true
    }
})

module.exports = mongoose.model('Products', productsSchema)