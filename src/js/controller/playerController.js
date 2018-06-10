// We are adding a function called Ctrl1
// to the module we got in the line above
var toastr = require("toastr");

export default function playerController($scope, keyService, serverConnection, $interval) {
    // $scope.text = "Weiter zur liste";
    var keySelector = {};
    var speed = 5;
    var pos_x = 100;
    $scope.text = "d";

    serverConnection.connect($scope);

    $scope.textChange = function() {
        serverConnection.sendText($scope.value);
    };

    $scope.keyPress = function(e) {
        keySelector = keyService.setKey(e);
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
        angular.element("#player").css("left", "" + pos_x + "px");
        //angular.element("#player").focus();
    }, 24);
}
