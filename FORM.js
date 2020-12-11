class Form{

    constructor(){

    }

    display(){

        var title = createElement('h2');
        title.html("Car Racing Game 2.0");
        title.position(350,100);

        var input = createInput("Name: ");
        var button = createButton("Next");
        var greeting = createElement('h4');

        input.position(300,200);
        button.position(350,220);

        button.mousePressed(function(){

            input.hide();
            button.hide();

            var name = input.value();
            playerCount++;
            player.updateName(name);
            player.updateCount(playerCount);

            greeting.html("Hi" + name);
            greeting.position(320,350);

        })

    }

}