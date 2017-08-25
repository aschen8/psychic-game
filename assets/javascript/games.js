
var userWins = 0;
var userLosses = 0;
var winner;
var guessesRemaining = 12;

var spanUserChoice = document.getElementById("spanUserChoice");
console.log(spanUserChoice)
// spanUserChoice.innerHTML = spanUserChoice.join(',');
var spanUserWins   = document.getElementById("spanUserWins");
var spanUserLosses = document.getElementById("spanUserLosses");
var spanWinner     = document.getElementById("spanWinner");
var outcomes       = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
                      'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var spanGuessesRemaining = document.getElementById("spanGuessesRemaining");
var spanUserGuessed= ("spanUserGuessed");

// initialize(firstTime)
// {   
//     userWins=0;  userLosses=0; guessesRemaining = 12
//     if(firstTime){  userWins=0;  userLosses=0; guessesRemaining = 12}
// }
//feel i need to create two funcitons: 1. initizalize function stating the 
//starting parts of the game, and 2. a game over function that states game over
//when user wins or loses 12 guesses and calls the initalize function





document.onkeyup = function(event) {
	var userChoice = event.key;
	var index = Math.floor(Math.random() * outcomes.length);
	computerChoice = outcomes[index];





	if(userChoice == computerChoice){

		spanWinner.textContent= "you guessed correctly!";
		userWins ++;
		spanUserWins.textContent=userWins;
		if(confirm("You've Won! Game Over, nothing to see here")){
			location.reload();}
// location.reload works to reset the game, but need other way to reset it


	}else {spanWinner.textContent="you guessed wrong!";
	    userLosses ++;
	    userChoiceText= spanUserChoice.innerText;
	    console.log(userChoiceText);
	    spanUserLosses.textContent= userLosses;
	    guessesRemaining = 12 - userLosses;
		spanGuessesRemaining.textContent= guessesRemaining;
		userChoiceText= userChoiceText + ', ' + userChoice;
		console.log(userChoiceText);
		spanUserChoice.innerHTML=userChoiceText;

		//spanUserGuessed= spanUserChoice.join(',');
		//userChoice= userChoice.join(',');
		//spanUserChoice= userChoice;
		//i feel i need to use .join to have game keep track of guesses letters. 
		//not sure how to do this

		
		
		if(guessesRemaining == 0){
			alert("GAME OVERRRRRR");
 			initGame();
// location.reload works to reset the game, but need other way to reset it
	     }

		
	} 
}




