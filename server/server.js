const express = require('express')
const cors = require('cors')
const app = express()
var bodyParser = require('body-parser')
const ProductFactory = require('./classes/ProductFactory')
const User = require('./classes/User')
const Order = require('./classes/Order')
const PaymentContext = require('./classes/PaymentContext')
const CreditCardPayment = require('./classes/CreditCardPayment')


app.use(cors())
app.use(bodyParser.json()); // To parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // To parse URL-encoded bodies


const products = []
const user = new User()
const orders = []
const paymentContext = new PaymentContext()


app.get('/products', (req, res) => {
    res.json({products})
})

app.post('/observe-product', (req, res) => {
    const product = req.body
    const foundProduct = products.find(_product => product.name == _product.name)
    foundProduct.addObserver(user)
    res.json({message: "L'utilisateur observe le stock du produit"})
})

app.post('/add-product', (req, res) => {
    const product = ProductFactory.createProduct(req.body.type, req.body.name, req.body.price, req.body.stock)
    products.push(product)
    res.json({product})

})

app.post('/add-to-cart', (req, res) => {
    const product = req.body
    const foundProduct = products.find(_product => product.name == _product.name)
    foundProduct.setStock(foundProduct.stock - 1)
    const order = new Order(foundProduct.price)
    orders.push(order)
    res.json({message: "Le produit a ete rajoute au panier"})
})

app.get('/orders', (req, res) => {
    res.json({orders})
})

app.post('/payment', (req, res) => {
    const paymentMethod = req.body.paymentMethod
    const amount = req.body.paymentAmount
    switch(paymentMethod) {
        case 'credit':
            paymentContext.setStrategy(new CreditCardPayment)
            break;
        case 'paypal':
            paymentContext.setStrategy(new CreditCardPayment)
            break;
        case 'crypto':
            paymentContext.setStrategy(new CreditCardPayment)
            break;
        default:
            break;
    }
    paymentContext.executeStrategy(amount)
    res.json({message: 'paiement effectue avec succes'})

})

app.listen(3001, () => console.log('Server listening to port 3001'))