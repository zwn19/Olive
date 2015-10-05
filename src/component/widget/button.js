var _ = require('underscore');
var Root = require('oliveroot');
var Component = require('../component.js');

module.exports = Root.define({
    extend: Component,
    remove: function () {},
    show: function () {},
    hide: function () {},
    destroy: function () {},
    tpl: '<div>Button</div>'
});