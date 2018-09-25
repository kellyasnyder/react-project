require('./Mongoose');

const express = require('express');
const bodyParser = require('body-parser');
const {Product} = require('./Product');

const app = express();

app.use(bodyParser.json());

// allow cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.get('/products', (req, res)=> {
    Product.find({}).then(products => res.send(products)).catch(err => res.status(400).send(err));
});

app.post('/products', (req, res) => {
    const {item, price, url, alt} = req.body;
    const product = new Product({
        item, price, url, alt
    })
    product.save().then(productAdded => res.send(productAdded)).catch(err => res.status(400).send(err));
})

app.put('/products/:id', (req, res) => {
    const id = (req.params.id);
    const {item, price, url, alt} = req.body;
    Product.findById(id).then(product => {
        if (!product) {
            return res.status(404).send('Unable to find product');
        }
        if (item) {
            product.set({
                item
            })
        }
        if (price) {
            product.set({
                price
            })
        }
        if (url) {
            product.set({
                url
            })
        }
        if (alt) {
            product.set ({
                alt
            })
        }
    }).catch(err => res.status(400).send(err));
})

app.listen(4000);