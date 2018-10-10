const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    _id: { 
        type: mongoose.Schema.Types.ObjectId, 
        auto: true
    },
    item: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    availability: {
        type: String,
        required: true
    }
}, { versionKey: false })

const Product = mongoose.model('Product', ProductSchema);

module.exports = {
    Product
};