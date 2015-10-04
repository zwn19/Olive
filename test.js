var Olive = require('./Olive.js');

var Button = Olive.components.Button;

var btn = new Button({
    say: 1
});

console.log(btn.parse());