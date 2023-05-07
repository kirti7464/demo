const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema( {
    userId:{
        type:mongoose.Schema.Types.Mixed,
        ref:'User'
    },
    productId:{
        type:mongoose.Schema.Types.Mixed,
        ref:'Product'
    },
    amount:Number,
    isFreeAppUser:Boolean,
    date:Date
}, { timestamps: true });


module.exports = mongoose.model('Order', orderSchema) //users

