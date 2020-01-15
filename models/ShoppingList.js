const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ShoppingListSchema = new Schema({
    products: {
        type: String,
        required: true
    }
});

module.exports = Shopping = mongoose.model('Shopping', ShoppingListSchema);