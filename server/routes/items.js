module.exports = function(app) {
    var items = [{
        name: 'milk'
    }, {
        name: 'water'
    }, {
        name: 'meat',
        purchased: true
    }, {
        name: 'fish'
    }];

    app.route('/api/items')
        .get(function(req, res) {
            res.send(items);
        })
};