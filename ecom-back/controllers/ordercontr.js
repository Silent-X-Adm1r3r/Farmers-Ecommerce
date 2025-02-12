const OModel = require('../models/OModel');
const PModel = require('../models/PModel');

//Create Order - /api/v1/order 
exports.createOrder = async (req, res, next) => {
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc, item) => (acc + item.product.price * item.qty), 0)).toFixed(2);
    const status = 'pending';
    const order = await OModel.create({cartItems, amount, status})

    // Updating product stock
    cartItems.forEach(async (item)=> {
        const product = await PModel.findById(item.product._id);
        product.stock = product.stock - item.qty;
        await product.save();
    })


    res.json(
        {
            success:true,
            order
        }
    )
}