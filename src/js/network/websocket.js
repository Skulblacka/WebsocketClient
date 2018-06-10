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
                    scope.text = JSON.parse(message.body).content;
                });
            },
            function(error) {
                return message.error;
            }
        );
    }

    function sendText(value) {
        ws.send("/app/hello", {}, JSON.stringify({ name: value }));
    }
    return { connect, sendText };
});
