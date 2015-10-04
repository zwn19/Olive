var Root = require('oliveroot');
var Component = require('./component/component.js'),
    Button = require('./component/widget/button.js');

module.exports = {
  define: Root.define,
  components: {
    Component: Component,
    Button: Button
  }
};