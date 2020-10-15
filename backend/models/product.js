const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const ProductSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    companyName: String,
    productName: String,
    category: String,
    totalProduct: Number,
    totalPrice: Number,
    prePieceSalePrice: Number,
    history: []
})

ProductSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Product', ProductSchema);