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
                ws.subscribe("/game/connection", function(message) {

                   position=JSON.parse(message.body);

                  storeUpdate(position, store,playeraction,scope);
                });
            },
            function(error) {
                return message.error;
            }
        );
    }

    function sendText(obj) {
        ws.send("/app/play", {}, JSON.stringify(obj));
    }
    return { connect, sendText };
});

function storeUpdate(data, store,playeraction,scope){
for(var i =0; i<data.values.length;i++){
    if(data.values[i][0]==store.Name){
        store.pos_x=data.values[i][1]
        store.pos_y=data.values[i][2]
        store.id=data.values[i][3];
        playeraction.moveEnemys(store)
        playeraction.movePlayer(scope,store);

        store.enemys[i]="x";
    }else{
        store.enemys[i]=data.values[i];
        playeraction.moveEnemys(store)
        playeraction.movePlayer(scope,store);
    }
}
}