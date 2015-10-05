var _ = require('underscore'),
    $ = require('jquery');

var Root = require('oliveroot');

module.exports = Root.define({
    initialize: function (options) {
        var self = this;
        _.each(options, function(value, key){
            self[key] = value;
        });
    },
    _parse: function () {
        this.dom = _.template(this.tpl, this.parseConfig)();
    },
    _render: function () {
        console.log(this.dom, this.parentDom);
    },
    target: '',
    renderTo: function (target) {
        this.parentDom = target || this.target;
        this._parse();
        this._render();
    },
    remove: function () {},
    show: function () {},
    hide: function () {},
    destroy: function () {}
});