// We are adding a function called Ctrl1
// to the module we got in the line above
var toastr = require("toastr");

export default function playerController($scope, keyService, Store, serverConnection, $interval,playeraction,$compile) {
    // $scope.text = "Weiter zur liste";
    var keySelector = {};
    var speed = 5;
    // $scope.pos_x = 100;
    $scope.text = "d";
    $scope.Beta = Store;
    $scope.name=Store.Name

    //console.log($scope.Beta);
    serverConnection.connect($scope,Store,playeraction,$compile);
    var obj = {
        name: $scope.Beta.Name,
        key: ""
    };

    // $scope.textChange = function() {
    //     serverConnection.sendText($scope.value);
    // };w

    $scope.keyPress = function(e) {
        // keySelector = keyService.setKey(e);
         obj.key = e.originalEvent.key;      
        //  playeraction.movePlayer($scope, Store);
       
    console.log("pressed Key: "+obj.key+" value: "+Store.pos_x+":"+Store.pos_y)
      serverConnection.sendText(obj)
    };
    // $scope.keyUp = function(e) {
    //     keySelector = keyService.unsetKey(e);
    // };

    $interval(function setFocus() {
        // if (keySelector.left) {
        //     pos_x = pos_x + speed * -1;
        // }
        // if (keySelector.rigth) {
        //     pos_x = pos_x + speed;
        //     console.log(Store.pos_x)

        // }
        angular.element("#player").css("left", "" + Store.pos_x + "px");
        angular.element("#player").css("top", "" + Store.pos_y + "px");
        angular.element("#player").focus();

    }, 24);
}
