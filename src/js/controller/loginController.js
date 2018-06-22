// We are adding a function called Ctrl1
// to the module we got in the line above

export default function loginController($scope, $window, Store, $http, $routeParams, $base64, restService) {
    // $scope.text = "Zurück zum login";
    //$scope.folders = restService.getFolders();

    $scope.login = () => {
        $scope.Alpha = Store;
        $scope.Alpha.Name = $scope.userName;
        $window.location.href = "/#!/player";
    };
}
