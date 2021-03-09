class Form{
    constructor(){
        this.title = createElement('h2');
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h3');
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        
        this.title.html("Car Racing game");
        this.title.position(width/2-40,0);

        this.input.position(width/2-40,130);
        this.button.position(width/2+20,170);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            this.greeting.html("Hello "+player.name);
            this.greeting.position(width/2-40,170);

            playerCount++;
            player.index=playerCount;
            player.updateCount(playerCount);
            player.update();
        })
    }
}