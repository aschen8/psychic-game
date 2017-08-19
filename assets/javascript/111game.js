var testingthis = 3+10;
console.log(testingthis);



var userChoice;
var userWins = 0;
var userLosses = 0;
var winner;

var spanUserChoice = document.getElementById("spanUserChoice");
var spanUserWins   = document.getElementById("spanUserWins");
var spanUserLosses = document.getElementById("spanUserLosses");
var spanWinner     = document.getElementById("spanWinner");
var outcomes       = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
                      'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

document.onkeyup = function(event) {
	var keyHit = event.key;
	userChoice = keyHit;
	var index = Math.floor(math.random() *outcomes.length):
	computerChoice = outcomes[index];

	spanUserChoice.textContent= userChoice;

if(userChoice == computerChoice){
	spanWinner.textContent= "you guessed correctly!";
}else {
 spanWinner.textContent="you guessed wrong!";
}