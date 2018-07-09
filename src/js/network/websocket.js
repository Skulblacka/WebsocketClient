var app = angular.module("personal");
require("stompjs/lib/stomp");

var ws = null;
var test = "";
app.service("serverConnection", function() {
    function connect(scope,store,playeraction,complie) {
        var connection = new SockJS("/firstOne");
        ws = Stomp.over(connection);
        var position={};

        ws.connect(
            {},
            function(frame) {
                ws.subscribe("/topic/greetings", function(message) {
                    // scope.text = JSON.parse(message.body).content;
                   // scope.pos_x = JSON.parse(message.body).key;
                   position=JSON.parse(message.body);
                //   scope.pos_x=store.pos_x;

                //   store.Name=position.values[0][0]
                  storeUpdate(position, store,playeraction,scope,complie);
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

function storeUpdate(data, store,playeraction,scope,complie){
for(var i =0; i<data.values.length;i++){
    if(data.values[i][0]==store.Name){
        store.pos_x=data.values[i][1]
        store.id=data.values[i][2];
        playeraction.movePlayer(scope,store);
        playeraction.moveEnemys(scope,store,complie)
        store.enemys[i]="x";
    }else{
        store.enemys[i]=data.values[i];
    }
}
}