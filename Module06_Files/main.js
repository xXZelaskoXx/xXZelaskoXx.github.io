let questionTotal = 0;
let questionsCorrect = 0;
let currentQuestion = 1;
let correctAnswer;
let answers = [];

/*function: getQuestion


*/
function getQuestion(){
	setQuestionNumber(currentQuestion);
	$(document).load( "https://opentdb.com/api.php?amount=1", function(resource){
		parseResource = JSON.parse(resource);
		console.log(parseResource.results[0].question);
		$(question).text(parseResource.results[0].question);

		correctAnswer = parseResource.results[0].correct_answer;

		let answerKeySet = Math.floor(Math.random()*3);
		let incorrectAnswerKey = 0;
		let answered = false;
		
		for(let i = 0; i<4; i++){
			if(i != answerKeySet){
				answers[i] = parseResource.results[0].incorrect_answers[incorrectAnswerKey];
				$("#a" + String(i)).text(answers[i]);
				incorrectAnswerKey++;
			}
			else{
				answers[i] = parseResource.results[0].correct_answer;
				$("#a" + String(i)).text(answers[i]);
			}
		}



		questionTimer(correctAnswer);




	});
	currentQuestion++;
}

function questionTimer(correctAnswer){
	setTimeout(function() {submitAnswer("",correctAnswer); }, 15000);
}

function submitAnswer(answer, correctAnswer){
	if(answer == correctAnswer){
		$(question).text("You are correct! The answer is " + answer);
		questionsCorrect++;
	}
	else{
		$(question).text("You are incorrect. The correct answer is " + correctAnswer);
	}
	questionTotal++;
	setScore();

}

function setScore(){
	$("#score").text("Score: " + String(questionsCorrect) + "/" + String(questionTotal));
}


/*
function: setQuestion number
purpose: manipulate qNum element in html to reflect correct number

param: questionNumber: to set element
return: none

#TESTED, valid
*/
function setQuestionNumber(questionNumber){
	$("#qNum").text("Question " + String(questionNumber));
}

/*main

*/
