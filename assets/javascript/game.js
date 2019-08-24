var currentAP;
var currentFighter;
var currentFighterHP;

var currentDefender;
var currentDefenderHP;
var currentDefenderCAP;
var elementHP = ["waterElement", "earthElement", "fireElement", "airElement"]

var attackReady;
var gameOver;

var fighterChosen;
var defenderChosen;

var rounds;

//start the game. Or restart.
function startGame(){
    $(".currentFighter").text("Choose your fighter");
    $(".currentDefender").text("Choose your fighter");
    
    
    fighterChosen = false;
    defenderChosen = false;
    attackReady = false;
    currentAP = 0;
    rounds = 0;
    gameOver = false;
    
    $(".attackButton").hide();

}

//Load each element with its Health Points
for (var i = 0; i < elementHP.length; i++){
    var HPText = elementHP[i]
    var getPoints = $("#"+HPText).attr("health-points")

    $("#" + elementHP[i] + "HPDisplay").text("Health Points = " + getPoints);
}

//Play
startGame();

//Choosing fighter and defender
$(".elementChar").on("click", function(){
    if (!gameOver){
        if (!fighterChosen){
            currentAP = $(this).attr("attack-points")
            currentFighterHP = $(this).attr("health-points")
            currentFighter = this.id;
            $("#" + currentFighter + "HPDisplay").text("")
            $(".currentHPText").text("Health Points = " + currentFighterHP);

            $(".currentFighter").html(this);
            fighterChosen = true;
            

            $(".currentDefender").text("Choose your defender");
        
        }else if(!defenderChosen){        
            currentDefenderCAP = $(this).attr("counter-attack-points");
            currentDefenderHP = $(this).attr("health-points");
            currentDefender = this.id;
            $("#" + currentDefender + "HPDisplay").text("")
            $(".currentDefenderHPText").text("Health Points = " + currentDefenderHP);

            $(".currentDefender").html(this);
            defenderChosen = true;

        
    }
}
});



//Attack
$(".elementChar").on("click", function(){
if ((fighterChosen == true) && (defenderChosen == true)){
    attackReady = true;
    attack();
}})

function attack(){
    if (!gameOver){
    $(".attackButton").show();
    $(".attackButton").html("ATTACK");
    $(".nextRoundText").text("");
    }
   
}

function ceaseAttack(){
    $(".attackButton").hide();
    rounds++
}

//Attack button clicks
$(".attackButton").on("click", function(){
    currentAP = parseInt(currentAP);
    currentDefenderHP = currentDefenderHP - currentAP;
    currentFighterHP = currentFighterHP - currentDefenderCAP;

    $("#attackText").text("You hit for " + currentAP);
    $("#hitterText").text("They hit for " + currentDefenderCAP);
    $(".currentHPText").text("Health Points = " + currentFighterHP);
    $(".currentDefenderHPText").text("Health Points = " + currentDefenderHP);
    currentAP = currentAP + 6;
   

    if(currentFighterHP < 0){
        $(".nextRoundText").text("You loose. Refresh to play again.")
        attackReady = false;
        ceaseAttack();
        gameOver = true;
        console.log(gameOver)
    
    }else if(currentDefenderHP < 0){
        $(".nextRoundText").text("You win. Select another defender.")
        defenderChosen = false;
        attackReady = false;
        ceaseAttack();
    }

    if(rounds == 3){
        $(".scorecardCard").html("<h2>You win! Refresh to play again.</h2>")
        ceaseAttack();
    }

});
