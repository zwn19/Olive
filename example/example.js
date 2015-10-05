console.log('testing...', Olive);
//var Olive = require('../dist/olive.js');
//
var Button = Olive.components.Button;

var btn = new Button({
    say: 1
});

btn.renderTo('body');
