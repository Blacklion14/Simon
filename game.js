
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern=[];


function randomNogenerator(){
	var rand =Math.floor(Math.random()*4);
	var randomChoosenColor = buttonColors[rand];
	gamePattern.push(randomChoosenColor);

	$("#" + randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
	var audio = new Audio("sounds/" + randomChoosenColor + ".mp3");
	audio.play();
}

