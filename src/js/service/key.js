var app = angular.module("personal");

app.service("keyService", function() {
    function setKey(keyEvent) {
        var pos = {
            left: false,
            rigth: false,
            top:false,  
            down:false
        };
        if (keyEvent.originalEvent.key == "a") {
            (pos.left = true), (pos.rigth = false);
        }

        if (keyEvent.originalEvent.key == "d") {
            (pos.rigth = true), (pos.left = false);
        }
        if (keyEvent.originalEvent.key == "w") {
            (pos.top = true), (pos.down = false);
        }
        if (keyEvent.originalEvent.key == "s") {
            (pos.down = true), (pos.top = false);
        }
        return pos;
    }
    function unsetKey(keyEvent) {
        var pos = {
            left: false,
            rigth: false
        };
        if (keyEvent.originalEvent.key == "a") {
            pos.left = false;
        }

        if (keyEvent.originalEvent.key == "d") {
            pos.rigth = false;
        }
        return pos;
    }

    return { setKey, unsetKey };
});
