var guid = require('guid');
var listeners = {};

module.exports = {
    register: function(callback) {
        var id = guid.raw();
        listeners[id] = callback;
    },
    dispatch: function(payload) {
        console.info('dispatch..', payload);
        for (var id in listeners) {
            listeners[id](payload);
        }
    }
}