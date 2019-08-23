var waterElement;
var earthElement;
var fireElement;
var airElement;

var currentAP;
var currentFighter;

//start the game. Or restart.
function startGame(){
    $(".currentFighter").text("Choose your fighter");
    waterElement = 100;
    earthElement = 100;
    fireElement = 100;
    picElement = 100;
    
    currentAP = 0;

}

//setting the fighter

    $(".elementChar").on("click", function(){
        currentFighter = this.id;
        $("currentFighter").html(currentAP);
        
    })



//Play
startGame();

