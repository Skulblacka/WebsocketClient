import "babel-polyfill";
var angular = require("angular");

require("angular-route");
require("angular-resource");
require("angular-base64");
require("ng-file-upload");

// require("../../node_modules/bootstrap/dist/css/bootstrap.min.css");
// require("../../node_modules/font-awesome/css/font-awesome.min.css");
require("../styles/style.scss");
require("bootstrap");
require("socket.io-client");
var toastr = require("toastr");
var app = angular.module("personal", ["ngRoute", "ngResource", "base64", "ngFileUpload"]); //personal ist der Modulname. ngRoute und ngresource müssen mit npm installiert werden

require("./controller");
require("./http");
require("./service/key");
require("./network/websocket");

toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: true,
    progressBar: false,
    positionClass: "toast-top-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut"
};

app.config(function($routeProvider) {
    $routeProvider
        .when("/list", {
            templateUrl: "view/list.html",
            controller: "listController"
        })
        .when("/detail/:id", {
            templateUrl: "view/details.html",
            controller: "detailController" //das ist nur der name des Controllers, nicht der Datei Name
        })
        .when("/login", {
            templateUrl: "view/login.html",
            controller: "loginController"
        })
        .otherwise({
            redirectTo: "/login"
        });
});
