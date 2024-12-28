const express = require('express');
const { createProduct, getProducts, deleteProduct, updateProduct, getProduct } = require('../controllers/productController');
const router = express.Router()






router.post('/',createProduct);

// get all products

router.get('/',getProducts)

// get single product 

router.get('/:id',getProduct )

// update a  product
router.put('/:id',updateProduct)

// delete a product

router.delete('/:id',deleteProduct)


module.exports = router