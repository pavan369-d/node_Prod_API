const Products = require('../model/productModel')
const asyncHandler = require('express-async-handler')


const createProduct =  asyncHandler(async(req, res)=>{
    try{
        const product = await Products.create(req.body)
        res.status(200).send(product);

    }catch(err){
        res.status(500).send(err.message)
    }
})

const getProducts = asyncHandler(async(req, res)=>{
    try{
        const products = await Products.find();
        res.status(200).send(products)
    }catch(err){
        res.status(404).send(err.message)
    }
})

const getProduct = asyncHandler(async(req, res)=>{
    try{
        console.log(req.params);
        // const id = req.params.id
        const {id} = req.params
        const product = await Products.findById(id);
        res.status(200).send(product)

    }catch(err){
        res.status(500)
        throw new Error(err.message)
    }
})

const updateProduct =  asyncHandler(async(req, res)=>{
    try{
        const {id} = req.params;
        const product = await Products.findByIdAndUpdate(id, req.body);
        console.log(product)
        if(!product){
            return res.status(404).send({message: 'Product not found'})
        }
        res.status(200).json(product)

    }catch(err){
        res.status(500).send(err.message)
    }
})

const deleteProduct =  asyncHandler(async(req, res)=>{
    try{
        const {id} = req.params
        const product = await Products.findByIdAndDelete(id);
        res.status(200).send(product)
        if(!product){
            return res.status(404).send({message: "Product not found"})
        }
    }catch(err){
        res.status(500).send(err.message)

    }
})

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}