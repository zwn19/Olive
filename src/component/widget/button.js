var _ = require('underscore');
var Root = require('oliveroot');
var Component = require('../component.js');
var Observable = require('../mixin/observable.js');

module.exports = Root.define({
    extend: Component,
    mixin: Observable,
    tpl: '<button id="<%= obj.id %>">Button</button>'
});