app.controller("myCtrl", function ($scope) {
    $scope.firstname = "John";
    $scope.lastname = "Doe";
});

app.controller("bindingCtrl", function ($scope) {
    $scope.myModel = "This is a model value from the application declared in the controller";
    $scope.buttonEvent = function () {
        $scope.myModel = "Model was changed with button click";
    }
});

app.controller("functionCtrl", function ($scope) {
    $scope.firstNum;
    $scope.secondNum;
    $scope.ctrlFunction = function () {
        return $scope.firstNum + $scope.secondNum;
    }
});

app.controller('namesCtrl', function($scope) {
    $scope.names = ['Jani', 'Carl', 'Margareth', 'Hege', 'Joe', 'Gustav', 'Birgit', 'Mary', 'Kai'];
});

