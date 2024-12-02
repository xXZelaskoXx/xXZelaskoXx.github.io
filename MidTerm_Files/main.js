/*
Dylan Zelasko

WEBT2300 

Mid-Term Project

main.js
*/

//iterator
let i = 0;

//answersCorrect container
let answersCorrect = 0;

//answers given total container
let answersTotal = 0;


//function called by submit button
function submit() {

	//adds to answers provided thus far
	answersTotal++;

	//container for new score to pass to html
	let newScore = "";

	//alert for succesfully answering <TEST VALUE>
	alert("You have answered the question");

	//builds value to pass score id
	newScore = ("Score " + answersCorrect + "/ " + answersTotal);

	//passes newScore to html id score
	$("#score").html(newScore);
}


//called to compare input value to correct value from API
function checkAnswer(){
	//userInput id

	//compare value from userInput id to correct answer

	//return true or false depending on if answer is correct

}