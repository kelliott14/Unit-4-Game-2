$(document).ready(function() {

    var currentFighterAP;
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
        $("#chooseFighterText").text("Choose your fighter");
        $("#chooseDefenderText").text("Choose your fighter");
        
        
        fighterChosen = false;
        defenderChosen = false;
        attackReady = false;
        currentFighterAP = 0;
        rounds = 0;
        gameOver = false;
        
        $(".attackButton").hide();
    }

    //Load each element with its Health Points
    for (var i = 0; i < elementHP.length; i++){
        var HPText = elementHP[i];
        var getPoints = $("#"+HPText).attr("health-points");

        $("#" + elementHP[i] + "HPDisplay").text("Health Points = " + getPoints);
    }

    //Play
    startGame();

    //Choosing fighter and defender
    $(".elementChar").on("click", function(){
        if (!gameOver){
            if (!fighterChosen){
                currentFighterAP = $(this).attr("attack-points");
                currentFighterHP = $(this).attr("health-points");
                currentFighter = this.id;
                $("#" + currentFighter + "HPDisplay").text("");
                $(".currentHPText").text("Health Points = " + currentFighterHP);
                $("#chooseFighterText").hide();

                $(".currentFighter").html(this);
                fighterChosen = true;
                

                $("#chooseDefenderText").text("Choose your defender");
            
            }else if(!defenderChosen){        
                currentDefenderCAP = $(this).attr("counter-attack-points");
                currentDefenderHP = $(this).attr("health-points");
                currentDefender = this.id;
                $("#" + currentDefender + "HPDisplay").text("");
                $(".currentDefenderHPText").text("Health Points = " + currentDefenderHP);
                $("#chooseDefenderText").hide();

                $(".currentDefender").html(this);
                defenderChosen = true;        
            }
        }
    });

    //Attack ready
    $(".elementChar").on("click", function(){
        if ((fighterChosen == true) && (defenderChosen == true)){
            attackReady = true;
            attack();
        }
    })

    //Attack function, displays the attack button
    function attack(){
        if (!gameOver){
        $(".attackButton").show();
        $(".attackButton").html("ATTACK!");
        $(".nextRoundText").text("");
        }
    }

    //Hides the attack button when not playing
    function ceaseAttack(){
        $(".attackButton").hide();
    }

    //Attack button clicks
    $(".attackButton").on("click", function(){
        currentFighterAP = parseInt(currentFighterAP);
        currentDefenderHP = currentDefenderHP - currentFighterAP;
        currentFighterHP = currentFighterHP - currentDefenderCAP;

        //Scorecard updates
        $("#attackText").text("You hit for " + currentFighterAP);
        $("#hitterText").text("They hit for " + currentDefenderCAP);
        $(".currentHPText").text("Health Points = " + currentFighterHP);
        $(".currentDefenderHPText").text("Health Points = " + currentDefenderHP);
        
        //Attack Point increase
        currentFighterAP = currentFighterAP + 6;
    
        //If else statements for winning, losing and going another round.
        if(rounds < 2){
            if(currentFighterHP < 0){
            $(".nextRoundText").text("You lose. Refresh to play again.")
            attackReady = false;
            ceaseAttack();
            gameOver = true;

            }else if(currentDefenderHP < 0){
            $(".nextRoundText").text("You win! Select another defender.")
            defenderChosen = false;
            attackReady = false;
            ceaseAttack();
            rounds++
            }

        }else if(currentDefenderHP < 0){
            $(".scorecardCard").html("<h2>You win!!! Refresh to play again.</h2>")
            ceaseAttack();

        }else if(currentFighterHP < 0){
            $(".nextRoundText").text("You lose. Refresh to play again.")
            ceaseAttack();
        }
    });

});