var Core = Core || {};
(function() {
    Function.prototype.$isFunction = true;
    var global = this;

    function extendClass(superClass, subClass) {
        if(superClass && subClass){
            var f = function() {};
            f.prototype = superClass.prototype;
            subClass.prototype = new f();
            subClass.prototype.constructor = subClass;
        }
    }
    
    var ClassManager = Core.ClassManager = {
        classes: {},
        BaseClass: null
    };

    ClassManager.getClass = function(name){
        return ClassManager.classes[name];
    }
    Core.createClass = ClassManager.createClass = function(name, cfg) {
        ClassManager.classes[name] = fn = function() {};
        var val,
            superClass = cfg.extend && ClassManager.getClass(cfg.extend) || ClassManager.BaseClass;
        delete cfg.extend;
        extendClass(superClass, fn);
        var _proto = fn.prototype;
        for (var p in cfg) {
            val = cfg[p];
            //only create class function
            if (val.$isFunction) {
                val.$name = p;
                val.$ownerClass = name;
                _proto[p] = val;
            }
        }
        fn.$superClassName = superClass && superClass.$className;
        fn.$className = name;
        return fn;
    }

    ClassManager.BaseClass = Core.createClass("Base", {
        callParent: function() {
            var caller = arguments.callee.caller,
                thisClass = ClassManager.getClass(caller.$ownerClass),
                superClass = ClassManager.getClass(thisClass.$superClassName);
            var superFn = superClass.prototype[caller.$name];
            if (superFn && superFn.$isFunction) {
                return superFn.apply(this, arguments);
            }
        }
    });

})()

var B = Core.createClass("B", {
    say: function(cnt) {
        alert("B"+cnt);
        this.callParent(cnt);
    }
});
var BB = Core.createClass("BB", {
    extend: "B",
    say: function(cnt) {
        alert("BB"+cnt);
        this.callParent(cnt);
    }
});
var BBB = Core.createClass("BBB", {
    extend: "BB",
    say: function(cnt) {
        alert("BBB"+cnt);
        this.callParent(cnt);
    }
});
var bb = new BBB();
bb.say("-say");
