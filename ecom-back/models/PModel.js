const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"],
        trim: true,
        maxLength: [100, "Product name cannot exceed 100 characters"]
    },
    price: {
        type: Number,
        required: true,
        default: 0.0
    },
    description: {
        type: String,
        required: [true, "Please enter product description"]
    },
    ratings: {
        type: String,
        default: 0
    },
    images : [
        {
            image: {
                type: String,
                required: true
            }        }
    ],
    category: {
        type: String,
        required: [true, "Please enter product category"],
        enum: {
            values: [
                'Grains & Cereals',
                'Fruits & Vegetables',
                'Dairy Products',
                'Meat & Poultry',
                'Fish & Seafood',
                'Seeds & Fertilizers',
                'Farming Tools & Equipment',
                'Animal Feed & Supplements',
                'Herbs & Spices',
                'Irrigation & Watering Systems'
            ],
            message: "Please select a valid product category"
        }
    }
    , 
    seller: {
        type: String,
        required: [true, "Please enter product seller"]
    }, 
    stock: {
        type: Number,
        required: [true, "Please enter product stock"],
        maxLength: [20, 'Product stock cannot exceed 20']
    }, 
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            rating: {
                type: String,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type : mongoose.Schema.Types.ObjectId
    }
    , 
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const productModel = mongoose.model('Product',productSchema);

module.exports = productModel;