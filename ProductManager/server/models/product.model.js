const mongoose = require('mongoose');
 
const ProductSchema = new mongoose.Schema({ //Schema == Table
    title: {
        type: String,
        required : [true, 'Title is required'], 
        minlength: [3, 'Location must be at least 3 characters long']
    },
    price: {
        type : Number,
        required : [true, 'Price is required'],
        min: [1, 'Price must be at least 1'],
    },
    description: {
        type : String,
        required : [true, 'Description is required'],
        minlength: [6, 'Description must be at least 6 characters long']  
    }
    
}, { timestamps : true });
 
const Product = mongoose.model('Product', ProductSchema);
 
module.exports = Product;