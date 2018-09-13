// HOMEWORK #5 
$(document).ready(function() {
// when the page is loaded first, the timer, questions and summary must be hidden.

$('#countdown').hide();
$('.trivia-ques').hide();
$('.results').hide();

    // Declare Variables

    // CorrectAnswersScore
    // WrongAnswersScore

var number = 300; //number of seconds
var intervalId;
correctCount = 0;
wrongCount = 0;
unanswered = 0;

//ALL FUNCTIONS

// Countdown Timer
    
// function to show questions
function showQuestions()
    {
    $('#countdown').show();
    $('.trivia-ques').show();
    $('#game-done').show();
    }
// function for timer
function countdownTimer()
    {
        intervalId = setInterval(decrement, 1000);
    }
// function to decrement timer
function decrement(){
number--;
$('#timer').html(" " + number + " " + "seconds");
if (number ===1){
    $('#timer').html(" " + number + " " + "second");
}
else if(number ===0) {
    stop();
    hide();
    displaySummary();
}
}
function stop() {
        clearInterval(intervalId);
}

function hide(){
    $('#countdown').hide();
    $('.trivia-ques').hide();
    $('#game-done').hide();
    }

// function displaySummary
function displaySummary(){
    $('.results').show();
    $('#summary').text("All Done!"); 
    $('#correctScore').text(correctCount); 
    $('#wrongScore').text(wrongCount); 
    $('#unanswered').text(wrongCount); 
    console.log("summary display" + correctCount + wrongCount)
   }

// CLICK EVENTS

//Clicking Start Button
 $('#game-start').on('click', function(){
     $('#game-start').hide();
     showQuestions();
     countdownTimer();
 }); 

 //Clicking Done Button
 $('#game-done').on('click', function(){
    $('#game-start').hide(); 
    hide();
    displaySummary();
 });

//Clicking Radio button
$('input[type=radio]').on ('change', function(){
correctCount = $('input[value=correct]:checked').length;
wrongCount = $('input[value=wrong]:checked').length;
unanswered = (8-(correctCount+wrongCount));
});

    

// Last closing bracket
});