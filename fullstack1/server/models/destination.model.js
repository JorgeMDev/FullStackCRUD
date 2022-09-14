const mongoose = require('mongoose');
 
const DestinationSchema = new mongoose.Schema({ //Schema == Table
    location: {
        type: String,
        required : [true, 'Location is required'], 
        minlength: [3, 'Location must be at least 3 characters long']
    },
    rating: {
        type : Number,
        required : [true, 'Rating is required'],
        min: [1, 'Rating must be between 1-10'],
        max: [10, 'Rating must be between 1-10']
    },
    image : {
        type : String,
        required : [true, 'Image is required']
    },
    season: {
        type : String,
        required : [true, 'Season is required']
        
    }
    
}, { timestamps : true });
 
const Destination = mongoose.model('Destination', DestinationSchema);
 
module.exports = Destination;