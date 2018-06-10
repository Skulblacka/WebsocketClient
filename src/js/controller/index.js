var listCtrl = require("./listController");
var loginCtrl = require("./loginController");
var detailCtrl = require("./detailController");

var app = require("angular").module("personal");

app.controller("listController", listCtrl.default);
app.controller("detailController", detailCtrl.default);
app.controller("loginController", loginCtrl.default);
