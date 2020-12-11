class Player{

    constructor(){

    }

    getCount(){
        var playerRef = dataBase.ref('playerCount');
        playerRef.on("value",function(data){
            playerCount = data.val();
        })
    }

    updateCount(count){
        dataBase.ref('/').update({
            playerCount:count
        })
    }

    updateName(name){
        var playerIndex = "Player" + playerCount;
        dataBase.ref('playerIndex').set({
            Name:name
        })
    }

}