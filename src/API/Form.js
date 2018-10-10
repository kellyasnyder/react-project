const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
    _id: { 
        type: mongoose.Schema.Types.ObjectId, 
        auto: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    comments: {
        type: String
    }
}, { versionKey: false })

const Form = mongoose.model('Form', FormSchema);

module.exports = {
    Form
};