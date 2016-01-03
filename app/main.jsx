var ReactDOM = require('react-dom');
var React = require('react');

var GroceryItemList = require('./components/GroceryItemList.jsx');

var initial = [{
    name: 'milk'
}, {
    name: 'water'
}, {
    name: 'meat',
    purchased: true
}, {
    name: 'fish'
}];

ReactDOM.render(<GroceryItemList items={initial}/>, app);