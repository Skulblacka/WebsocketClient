var app = angular.module("personal");
require("stompjs/lib/stomp");

var ws = null;
var test = "";
app.service("serverConnection", function() {
    function connect(scope) {
        var connection = new SockJS("/firstOne");
        ws = Stomp.over(connection);

        ws.connect(
            {},
            function(frame) {
                ws.subscribe("/topic/greetings", function(message) {
                    // scope.text = JSON.parse(message.body).content;
                    scope.pos_x = JSON.parse(message.body).key;
                });
            },
            function(error) {
                return message.error;
            }
        );
    }

    function sendText(obj) {
        // console.log(obj);
        ws.send("/app/hello", {}, JSON.stringify(obj));
    }
    return { connect, sendText };
});
