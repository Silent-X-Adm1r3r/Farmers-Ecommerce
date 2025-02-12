const PModel = require('../models/PModel')

//Get Products API - /api/v1/products
exports.getProducts = async (req, res, next) => {
    const query = req.query.keyword?{ name : { 
        $regex: req.query.keyword,
        $options: 'i'
     }}:{}
    const products = await PModel.find(query);
    
    res.json({
            success: true,
            products
    })
}


//Get Single Product API - /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
    
    try {
        const product = await PModel.findById(req.params.id).populate('reviews.user','name email');
        res.json({
            success: true,
            product
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Unable to get Product with that ID'
        })
    }
}

