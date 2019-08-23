var waterElement = {
    "HealthPoints" : 100,
    "AttackPower" : 10,
    "CounterAttackPower" : 10
};

var earthElement = {
    "HealthPoints" : "100",
    "AttackPower" : "10",
    "CounterAttackPower" : "10"
};

var fireElement = {
    "HealthPoints" : "100",
    "AttackPower" : "10",
    "CounterAttackPower" : "10"
};

var airElement = {
    "HealthPoints" : "100",
    "AttackPower" : "10",
    "CounterAttackPower" : "10"
};

var currentAP;
var currentFighter;
var currentFighterHP;

var currentDefender;
var currentDefenderHP;
var currentDefenderCAP;

var attackReady;

var fighterChosen;
var defenderChosen;

//start the game. Or restart.
function startGame(){
    $(".currentFighter").text("Choose your fighter");
    $(".currentDefender").text("Choose your fighter");
    
    
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
        currentAP = $(this).attr("attack-points")
        currentFighterHP = $(this).attr("health-points")
        $(".HPDisplay").empty();

        $(".currentFighter").html(this);
        fighterChosen = true;
        
        $(".currentHPText").text("Health Points = " + currentFighterHP);
        $(".currentDefender").text("Choose your defender");
    
    }else{        
        currentDefenderCAP = $(this).attr("counter-attack-points");
        currentDefenderHP = $(this).attr("health-points");
        $(".currentDefender").html(this);
        defenderChosen = true;

        $(".currentDefenderHPText").text("Health Points = " + currentDefenderHP);
        
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

//Attack button clicks
$(".attackButton").on("click", function(){
    
    currentDefenderHP = currentDefenderHP - currentAP;
    currentFighterHP = currentFighterHP - currentDefenderCAP;

    $("#attackText").text("You hit for " + currentAP);
    $("#hitterText").text("They hit for " + currentDefenderCAP);
    $(".currentHPText").text("Health Points = " + currentFighterHP);
    $(".currentDefenderHPText").text("Health Points = " + currentDefenderHP);
    

});
