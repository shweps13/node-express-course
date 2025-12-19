const express = require("express");
const router = express.Router();
const { getProducts, getProductById } = require("../controllers/products.js");

router.get('/', (req, res) => {
    getProducts(req, res)
})

router.get('/:productID', (req, res) => {
    getProductById(req, res)
})

module.exports = router;