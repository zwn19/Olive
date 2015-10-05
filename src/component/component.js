var _ = require('underscore'),
    $ = require('jquery');
var Root = require('oliveroot');
var Renderable = require('./mixin/renderable.js');

var ids = 0;

module.exports = Root.define({
    mixin: Renderable,
    //TODO clean
    initialize: function (options) {
        var self = this;
        _.each(options, function(value, key){
            self[key] = value;
        });
        this.id = ++ids;
        this.parseConfig = {
            id: this.id
        };
        if (_.isFunction(this._registerEvents))
            this._registerEvents();
    },
    destroy: function () {}
});