
var userWins = 0;
var userLosses = 0;
var winner;
var guessesRemaining = 12;

var spanUserChoice = document.getElementById("spanUserChoice");
// spanUserChoice.innerHTML = spanUserChoice.join(',');
var spanUserWins   = document.getElementById("spanUserWins");
var spanUserLosses = document.getElementById("spanUserLosses");
var spanWinner     = document.getElementById("spanWinner");
var outcomes       = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
                      'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var spanGuessesRemaining = document.getElementById("spanGuessesRemaining");

// var counter= 0;

//     function incrementCount(){
//        count++;
//     }

//     console.log(count);
//     incrementCount();
//     console.log(count);  

document.onkeyup = function(event) {
	var userChoice = event.key;
	var index = Math.floor(Math.random() * outcomes.length);
	computerChoice = outcomes[index];

	spanUserChoice.textContent= userChoice;

	if(userChoice == computerChoice){

		spanWinner.textContent= "you guessed correctly!";
		userWins ++;
		spanUserWins.textContent=userWins;
		if(confirm("You've Won! Game Over, nothing to see here")){
			window.location.reload()}
	}else {spanWinner.textContent="you guessed wrong!";
	    userLosses ++;
	    spanUserLosses.textContent= userLosses;
	    guessesRemaining = 12 - userLosses;
		spanGuessesRemaining.textContent= guessesRemaining;

		userChoice = userChoice.join(',');

		spanUserChoice = userChoice;
		
		if(guessesRemaining == 0){alert("GAME OVERRRRRR");
		window.location.reload();
	     }

		
	} 
}




