var mongoose = require('mongoose');
var GroceryItem = require('./models/GroceryItem.js');

mongoose.connect('mongodb://localhost/grocery', function() {
    console.log('connected');

    // mongoose.connection.db.dropDatabase();

    // var items = [{
    //     name: 'milk'
    // }, {
    //     name: 'water'
    // }, {
    //     name: 'meat',
    //     purchased: true
    // }, {
    //     name: 'fish'
    // }];

    // items.forEach(function(item) {
    //     new GroceryItem(item).save();
    // });
});