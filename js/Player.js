class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.podium=0
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getpodium(){
    var rankRef = database.ref('rank');
    rankRef.on("value",(data)=>{
      this.podium = data.val();
    });
  }

 static updatepodium(r1){
    database.ref('/').update({
      rank : r1
    });
  }



}
