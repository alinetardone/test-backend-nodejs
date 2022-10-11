const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({

    description: {

        type: String,
        require: true
    }
})

module.exports = mongoose.model('Categories', categoriesSchema)