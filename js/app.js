var app = angular.module("myApp", []);

//naming convention is camelCase and results in a my-directive directive
app.directive("myDirective", function(){
    return{
        //you return a template with html elements in the directive
        template: "<p> This content comes from a custom directive : my-directive</p>"
    };
});

//custom filter that transforms every other character to uppercase
app.filter('myFormat', function() {
    return function(x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});
