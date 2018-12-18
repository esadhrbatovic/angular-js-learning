var app = angular.module("myApp", []);

//naming convention is camelCase and results in a my-directive directive
app.directive("myDirective", function(){
    return{
        //you return a template with html elements in the directive
        template: "<p> This content comes from a custom directive : my-directive</p>"
    };
});