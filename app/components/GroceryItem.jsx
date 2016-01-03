var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <h4 className={this.props.item.purchased ? "purchased" : ''}>{this.props.item.name}</h4>
            </div>
        )
    }
})