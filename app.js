var Root = require('oliveroot');
var Component = require('./component/component.js'),
    Button = require('./component/widget/button.js');

(function (global) {
    var Olive = {
        define: Root.define,
        components: {
            Component: Component,
            Button: Button
        }
    };
    module.exports = global.Olive = Olive;
})(typeof window !== "undefined" ? window : this);