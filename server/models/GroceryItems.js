var mongoose = require('mongoose');

var GroceryItemSchema = {
    name: String,
    purchase: Boolean,
    id: String
};

var GroceryItem = mongoose.model('GroceryItem',  GroceryItemSchema, 'groceryItems');

module.exports = GroceryItem;