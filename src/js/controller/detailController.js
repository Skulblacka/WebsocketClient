// We are adding a function called Ctrl1
// to the module we got in the line above

export default function detailController($scope, $http, $routeParams, $base64, restService) {
    $scope.text = "Zurück zum login";

    $scope.folders = restService.getFolders();
}
