var React = require('react');
var action = require('./../actions/GroceryItemActionCreator.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            input: ""
        };
    },

    handleInputName: function(e) {
        this.setState({
            input: e.target.value
        });
    },

    addItem: function(e) {
        e.preventDefault();
        action.add({
            name: this.state.input
        });
        this.setState({
            input: ''
        });
    },

    render: function() {
        return (
            <div className="grocery-add-item">
                <form onSubmit={this.addItem}>
                    <input value={this.state.input} type="text" onChange={this.handleInputName}/>
                    <button>Add item</button> 
                </form>
            </div>
        )
    }
})