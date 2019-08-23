var waterElement;
var earthElement;
var fireElement;
var airElement;

var currentAP;
var currentFighter;
var currentDefender;
var attackReady;

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
    attackReady = false;
    currentAP = 0;
    

}


//Play
startGame();

//Choosing fighter and defender
$(".elementChar").on("click", function(){
    if (!fighterChosen){
        currentFighter = this.id;
        $(".currentFighter").html(this);
        fighterChosen = true;

        $(".currentDefender").text("Choose your defender");
    
    }else{        
        currentDefender = this.id;
        $(".currentDefender").html(this);
        defenderChosen = true;
        console.log(attackReady);
    }
});


//Attack
$(".elementChar").on("click", function(){
if ((fighterChosen == true) && (defenderChosen == true)){
    attackReady = true;
    attack();
}})

function attack(){
    $(".attackButton").html("ATTACK");
}
