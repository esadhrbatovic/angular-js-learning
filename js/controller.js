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

app.controller('namesCtrl', function ($scope) {
    $scope.names = ['Jani', 'Carl', 'Margareth', 'Hege', 'Joe', 'Gustav', 'Birgit', 'Mary', 'Kai'];
});

app.controller('serviceCtrl', function ($scope, $location) {
    $scope.currentLocation = $location.absUrl();
});

app.controller('httpCtrl', function ($scope, $http) {
    $http.get("data/persondata.json").then(function (response) {
        $scope.persondata = response.data;
    });
});

app.controller('getCtrl', function ($scope, $http) {
    $scope.getFunction = function (x) {
        $http.get(x).then(function (response) {
            $scope.responsedata = response.data;
        });
    }

    $scope.setOrderByParam = function(param){
        $scope.orderByParam = param;
    }
});
