var ReactDOM = require('react-dom');
var React = require('react');

var GroceryItemList = require('./components/GroceryItemList.jsx');
var groceryItemStore = require('./stores/GroceryItemStore.jsx');

var initial = groceryItemStore.getItems();

function render(items) {
    ReactDOM.render(<GroceryItemList items={items}/>, app);
}

render(initial);
groceryItemStore.onChange(function(items) {
    render(items);
});