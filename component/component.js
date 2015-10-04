var _ = require('underscore');
var Root = require('oliveroot');

module.exports = Root.define({
    initialize: function (options) {
        var self = this;
        _.each(options, function(value, key){
            self[key] = value;
        });
    },
    parse: function (config) {
        return _.template(this.tpl, config)();
    },
    renderTo: function () {},
    remove: function () {},
    show: function () {},
    hide: function () {},
    destroy: function () {}
});