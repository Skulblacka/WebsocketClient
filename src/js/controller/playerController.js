
var toastr = require("toastr");

export default function playerController($scope, Store, serverConnection, $interval,playeraction,$compile) {

    $scope.Beta = Store;
    $scope.name=Store.Name

    serverConnection.connect($scope,Store,playeraction,$compile);
    var obj = {
        name: $scope.Beta.Name,
        key: ""
    };


    $scope.keyPress = function(e) {
         obj.key = e.originalEvent.key;      
       
    console.log("pressed Key: "+obj.key+" value: "+Store.pos_x+":"+Store.pos_y)
      serverConnection.sendText(obj)
    };

    $interval(function setFocus() {

        angular.element("#player").css("left", "" + Store.pos_x + "px");
        angular.element("#player").css("top", "" + Store.pos_y + "px");
        angular.element("#player").focus();

    }, 24);
}
