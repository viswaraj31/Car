class Player {
    constructor(){
        this.name = null;
        this.index = null;
        this.distance = 0;
    }

    getCount(){
        var playerCountRef = database.ref("PlayerCount");
        playerCountRef.on("value",function(data){
            playerCount=data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            PlayerCount:count
        })
    }

    update(){
    
        database.ref("players/player"+this.index).set({
            name:this.name,
            distance:this.distance
        })
    }

    static getPlayerInfo(){
        var playerInfo =  database.ref("players");
        playerInfo.on("value",(data)=>{
            allPlayers=data.val();
        })
    }

}