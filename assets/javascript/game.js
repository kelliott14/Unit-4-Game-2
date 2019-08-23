var waterElement;
var earthElement;
var fireElement;
var airElement;

var currentAP;
var currentFighter;
var currentDefender;

var fighterChosen;
var defenderChosen;

//start the game. Or restart.
function startGame(){
    $(".currentFighter").text("Choose your fighter");
    $(".currentDefender").text("Choose your fighter");
    waterElement = 100;
    earthElement = 100;
    fireElement = 100;
    picElement = 100;
    
    fighterChosen = false;
    defenderChosen = false;
    currentAP = 0;

}

//setting the fighter
function setFighter(){
if (!fighterChosen){
        currentFighter = this.id;
        $(".currentFighter").html(this);
        
        $(".currentDefender").text("Choose your defender");
        fighterChosen = true;

}
}

//setting the defender
if (!defenderChosen){
    $(".elementChar").on("click", function(){
        currentDefender = this.id;
        $(".currentDefender").html(this);
        
        defenderChosen = true;

})
}



//Play
startGame();
console.log(fighterChosen)

$(".elementChar").on("click", setFighter);
console.log(fighterChosen)