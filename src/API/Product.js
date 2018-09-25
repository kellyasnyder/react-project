const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    item: {
        type: String, 
        required: true
    },
    price: {
        type: Number, 
        required: true
    },
    type: {
        type: String, 
        required: true
    },
    id: {
        type: Number, 
        required: true
    },
    alt: {
        type: String, 
        required: true
    },
    url: {
        type: String, 
        required: true
    }
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = {
    Product
};