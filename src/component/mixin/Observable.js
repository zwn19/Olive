var _ = require('underscore'),
    $ = require('jquery');
var Root = require('oliveroot');

module.exports = Root.define({
    _registerEvents: function () {
        console.log('registering events...', this.listeners);
        var self = this;
        //TODO concern...
        var $doc = $(document);
        _.each(this.listeners, function (value, key) {
            $doc.on(key, '#' + self.id, value);
        });
    }
});