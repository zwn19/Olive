console.log('testing...', Olive);
//var Olive = require('../dist/olive.js');
//
var Button = Olive.components.Button;

var btn = new Button({
    listeners: {
        click: function () {
            alert('Button clicked.')
        }
    }
});

btn.renderTo('body');