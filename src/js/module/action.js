var app = angular.module("personal");

app.service("playeraction", function() {
        function moveEnemys(store) {

        for(let i=0; i<store.enemys.length;i++){
            if(store.enemys[i][1]!=undefined){
                createEnemy(store.enemys[i][1],store.enemys[i][2],store.enemys[i][0])
            }
         
        }
    }

    function movePlayer(scope,store) {
        scope.pos_x=store.pos_x;  
        console.log("move ME: "+store.Name)
    }
    return { movePlayer, moveEnemys };
});

var enemyExist=[];
function createEnemy(posi_X,posi_Y,name){

    if(enemyExist.indexOf(name)==-1){
        let d =document.createElement("div")
        d.classList.add("enemy");
        d.id=name
        d.style.position = "absolute";
        d.style.left = posi_X+'px';
        d.style.top = posi_X+'px';
        var t = document.createTextNode(name);
        d.appendChild(t);
        document.body.appendChild(d)
        enemyExist.push(name)
    }else{
        let a = document.getElementById(name);
        // d.style.position = "absolute";
         a.style.left = posi_X+'px';    
         a.style.top = posi_Y+'px';

    }

    console.log("change value from "+name+" to: "+posi_X+":"+posi_Y)
}