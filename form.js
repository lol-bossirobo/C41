class Form {

constructor() {

this.title = createElement('h1');
this.input = createInput("").attribute("placeholder","namehere");
this.button = createButton('Click to Play');
this.greeting = createElement ('h1')
this.reset = createButton ('Reset');


}
hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    this.title.hide();
}


display() {

    var title = this.title;
    title.html("Car-Racer");
    title.position(displayWidth/2 -50,0);
 
    
    var input = this.input;
    input.position(displayWidth/2-40,displayHeight/2-80);
    
    var button = this.button;
    button.position(displayWidth/2,displayHeight/2 );
    
    var greet = this.greeting;

    var reset = this.reset;

    reset.position(displayWidth -90, 30);

    reset.mousePressed (() => {

        player.updateCount(0);
        game.update(0);
        
        database.ref('/').update({

            players:null

        });
        database.ref('/').update({

            carsAtEnd:0

        });


    })

    button.mousePressed (() => {

        input.hide();
        button.hide();
        player.name = input.value();
        plCount +=1;
        player.index = plCount;
        player.update();
        player.updateCount(plCount);
        
        greet.html("Hello " + player.name);
        greet.position(displayWidth/2,400);


    });




}












}
