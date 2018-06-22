var app = angular.module("personal");

// app.factory("dataStore", function($http, $base64) {
//     //passwort
//     var auth = $base64.encode("root:optimal");
//     $http
//         .post("/osrest/api/documents/search", searchQuery, {
//             headers: {
//                 Authorization: "Basic " + auth,
//                 "Content-Type": "application/json"
//             }
//         })
//         .then(
//             response => {
//                 //DO Something
//             },
//             error => {
//                 console.error(error);
//             }
//         );

//     return list;
// });

app.service("restService", function($routeParams, $http, $base64) {
    function getFolders() {
        $http
            .get("/osrest/api/documents/objectHierarchy/" + $routeParams.osID + "?depth=10", {
                headers: {
                    Authorization: "Basic " + $base64.encode("root:optimal"),
                    "Content-Type": "application/json"
                }
            })
            .then(
                response => {
                    //DOSOMETHING
                },
                error => {
                    console.error(error);
                }
            );

        return "";
    }

    return { getFolders };
});
