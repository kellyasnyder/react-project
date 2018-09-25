// cd mongo/bin
// ./mongod -dbpath ~/mongo-data

let mongoose = require('mongoose');

// using promises instead of callbacks
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true});

module.exports = {
    mongoose
};