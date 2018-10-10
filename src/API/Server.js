require('./Mongoose');

const express = require('express');
const bodyParser = require('body-parser');
const {Product} = require('./Product');
const {Form} = require('./Form');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// allow cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

app.get('/products', (req, res) => {
    Product.find({}).then(products => res.send(products)).catch(err => res.status(400).send(err));
});

app.get('/form', (req, res) => {
    Form.find({}).then(form => res.send(form)).catch(err => res.status(400).send(err));
});

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    Product.findById(id).then(product => {
        if (product) {
            res.send(product)
        } else {
            res.send(404).send("Unable to find ID")
        }
    })
    .catch(err => res.status(400).send(err))
})

app.post('/products', (req, res) => {
    const { item, price, url, alt, availability, category } = req.body;
    const product = new Product ({
        item, price, url, alt, availability, category
    })
    product.save().then(productAdded => res.send(productAdded)).catch(err => res.status(400).send(err));
})

app.post('/form', (req, res, next) => {
    const { firstName, lastName, email, comments } = req.body;
    const formData = new Form({ firstName, lastName, email, comments})
    formData.save().then(() => {
        res.status(200).redirect("http://localhost:3000/contact")
        }).catch(err => res.status(400).send(err))
})

app.put('/products/:id/?', (req, res) => {
    const id = req.params.id;
    const {item, price, url, alt, category, availability} = req.body;
    return Product.findById(id).then(product => {
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
        if (category) {
            product.set ({
                category
            })
        }
        if (availability) {
            product.set ({
                availability
            })
        }
        product.save().then(updatedProduct => res.send(updatedProduct))
    }).catch(err => res.status(400).send(err));
})

app.delete('/products/:id', (req, res) => { 
    const id = req.params.id;
    Product.findByIdAndDelete(id).then(productDeleted => {
        if (productDeleted) {
            res.send(productDeleted)
        } else {
            res.status(404).send("Unable to find ID")
        }
    })
})

app.post('/form', (req, res) => {
    const {firstName, lastName, email, comments} = req.body;
    const form = new Form({
        firstName, lastName, email, comments
    })
    form.save().then(formData => res.send(formData)).catch(err => res.status(400).send(err));
})

app.listen(4000);