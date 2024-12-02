/*
Dylan Zelasko

NESCC CITC 1320

Module04 Lab script file

*/

//container for how many times advice has been received

let adviceCounter = 0;

//gets advice for display on webpage

function getAdvice() {
    

    // Make your AJAX request here
    $(document).load("https://api.adviceslip.com/advice", function(resource){
        $("#advice").text(JSON.parse(resource).slip.advice);
        adviceCounter++;
        $("#adviceCount").text(adviceCounter);
    });

}