class Game{

    constructor(){
        
    }

    getState(){
        var gamestateRef = dataBase.ref('Gamestate');
        gamestateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    updateState(state){
        dataBase.ref('/').update({
            Gamestate:state
        });
    }

    startState(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }

}
