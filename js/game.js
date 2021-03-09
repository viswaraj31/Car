class Game {
    constructor(){
        
    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    updateState(state){
        database.ref("/").update({
            'gameState':state
        })
    }

    async start(){
        if(gameState === 0){
            player = new Player();

            var data = await database.ref("PlayerCount").once("value");
            if(data.exists()){
                playerCount = data.val();
                player.getCount();
            }
           
            form = new Form();
            form.display();
        }

        car1 = createSprite(100,400);
        car2 = createSprite(300,400);
        car3 = createSprite(500,400);
        car4 = createSprite(700,400);
        cars = [car1,car2,car3,car4];

    }

    play(){
        form.hide();
        textSize(30);
        text("Game Start",120,100);
        Player.getPlayerInfo();
        
        if(allPlayers != undefined){
            var index = 0;
            var y;
            for(var i in allPlayers){
                y=windowHeight-allPlayers[i].distance
                index++
                if(index === player.index){
                    cars[index-1].shapeColor = "red"
                    camera.position.x=width/2;
                    camera.position.y=y;
                }
                cars[index-1].y=y;
            
            }
        }

        if(keyDown(UP_ARROW) && player.index!==null){
            player.distance += 20;
            player.update();
        }

        drawSprites();
    }
}