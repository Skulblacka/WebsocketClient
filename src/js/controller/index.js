var listCtrl = require("./listController");
var playerCtrl = require("./playerController");
var loginCtrl = require("./loginController");

var app = require("angular").module("personal");

app.controller("listController", listCtrl.default);
app.controller("loginController", loginCtrl.default);
app.controller("playerController", playerCtrl.default);
