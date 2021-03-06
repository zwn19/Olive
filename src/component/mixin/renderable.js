var _ = require('underscore'),
    $ = require('jquery');
var Root = require('oliveroot');

module.exports = Root.define({
    _parse: function () {
        this.dom = _.template(this.tpl)(this.parseConfig);
    },
    _render: function () {
        $(this.parentDom).append(this.dom);
    },
    renderTo: function (target) {
        this.parentDom = target || this.target || 'body';
        this._parse();
        this._render();
    },
    remove: function () {},
    show: function () {},
    hide: function () {}
});