var app = angular.module("personal");

app.service("keyService", function() {
    function setKey(keyEvent) {
        var pos = {
            left: false,
            rigth: false
        };
        if (keyEvent.originalEvent.key == "a") {
            (pos.left = true), (pos.rigth = false);
        }

        if (keyEvent.originalEvent.key == "d") {
            (pos.rigth = true), (pos.left = false);
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
