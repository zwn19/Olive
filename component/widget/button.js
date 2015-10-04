var _ = require('underscore');
var Root = require('oliveroot');
var Component = require('../component.js');

module.exports = Root.define({
    extend: Component,
    initialize: function (options) {
        console.log('init', options, this);
        var self = this;
        _.each(options, function(value, key){
            self[key] = value;
        });
    },
    renderTo: function () {},
    remove: function () {},
    show: function () {},
    hide: function () {},
    destroy: function () {},
    tpl: '<div></div>'
});