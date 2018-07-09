var app = angular.module("personal");

app.service("playeraction", function() {
    function movePlayer(scope,store) {
        scope.pos_x=store.pos_x;  
        console.log("move ME: "+store.Name)
    }

    function moveEnemys(scope, store, complie) {
        console.log(store.enemys.length)

        for(let i=0; i<store.enemys.length;i++){
            if(store.enemys[i][1]!=undefined){
                createEnemy(scope,store,store.enemys[i][1],store.enemys[i][0])
            }
         
        }
    }
    return { movePlayer, moveEnemys };
});

var enemyExist=[];
function createEnemy(scope,store,posi,name){

    if(enemyExist.indexOf(name)==-1){
        let d =document.createElement("div")
        d.classList.add("enemy");
        d.id=name
        d.style.position = "absolute";
        d.style.left = posi+'px';
        document.body.appendChild(d)
        enemyExist.push(name)
    }else{
        let a = document.getElementById(name);
        // d.style.position = "absolute";
         a.style.left = posi+'px';    
    }
    
    
        console.log("enemy created ("+name+"):"+ posi)
}