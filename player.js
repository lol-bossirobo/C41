class Player {

constructor () {

  this.index = null;
  this.distance = 0;
  this.name = null;
  this.rank = 0;

}

getCount() {

    var plref = database.ref("playerCount");
    plref.on("value", (data) => {
        plCount = data.val();
    })

}

updateCount(count){
  database.ref('/').update({
      playerCount: count
    
    }
  )
 
}

update(){
  var playerIndex= "players/player"+player.index;
  database.ref(playerIndex).set({
     name : this.name,
     distance : this.distance,
     place: this.rank
  })

}

//static functions
//Player.getpinfo();
//arrow 


static getpinfo() {

  var refpl = database.ref("players");
  refpl.on("value", (data) => {
    allp = data.val();
  });



}

getFinCar () {

  database.ref("carsAtEnd").on("value", (data)=> {

    this.rank = data.val();

  });
  

}
static updateCarsAtEnd(rank){
  
  database.ref('/').update({

    carsAtEnd : rank
  });

  this.rank += 1;

}

}