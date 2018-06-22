// We are adding a function called Ctrl1
// to the module we got in the line above
var toastr = require("toastr");

export default function playerController($scope, keyService, Store, serverConnection, $interval) {
    // $scope.text = "Weiter zur liste";
    var keySelector = {};
    var speed = 5;
    $scope.pos_x = 100;
    $scope.text = "d";
    $scope.Beta = Store;

    //console.log($scope.Beta);
    serverConnection.connect($scope);
    var obj = {
        name: $scope.Beta.Name,
        key: ""
    };

    $scope.textChange = function() {
        serverConnection.sendText($scope.value);
    };

    $scope.keyPress = function(e) {
        // keySelector = keyService.setKey(e);
        obj.key = e.originalEvent.key;
        serverConnection.sendText(obj);
    };
    $scope.keyUp = function(e) {
        keySelector = keyService.unsetKey(e);
    };

    $interval(function setFocus() {
        if (keySelector.left) {
            pos_x = pos_x + speed * -1;
        }
        if (keySelector.rigth) {
            pos_x = pos_x + speed;
        }
        angular.element("#player").css("left", "" + $scope.pos_x + "px");
        angular.element("#player").focus();
    }, 24);
}
