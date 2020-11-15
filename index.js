var userClickedPattern =[];

var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern=[];

var level = 0;

var started = false;

$(".btn").on("click" , function(){
	var userChoosenColor = this.id;
	userClickedPattern.push(userChoosenColor);
	playAudio(userChoosenColor);
	animate(userChoosenColor);
	checkAnswer(userClickedPattern.length-1);
});

$(document).on("keypress" ,function(){
	if(!started)
	{
		$("#level-title").text("Level " + level);
		nextSequence();
		started=true;
	}
} );

function checkAnswer(currentLevel){
	if(gamePattern[currentLevel] === userClickedPattern[currentLevel])
	{
		if(userClickedPattern.length === gamePattern.length){
			setTimeout(function(){
				nextSequence();
			}, 500);
		}
	}
	else {
      playAudio("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}

function nextSequence(){
	userClickedPattern=[];
	level++;
	$("#level-title").text("Level " + level);
	var rand =Math.floor(Math.random()*4);
	var randomChoosenColor = buttonColors[rand];
	gamePattern.push(randomChoosenColor);
	$("#" + randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
	playAudio(randomChoosenColor);
}

function playAudio(key){
	var audio = new Audio("sounds/" + key + ".mp3");
	audio.play();
}

function animate(key){
	currentButton = $("#" + key); 
	currentButton.addClass("pressed");
	setTimeout(function(){
		currentButton.removeClass("pressed");
	}, 100);
}

function startOver(){
	level = 0;
	started = false;
	gamePattern =[];
}


