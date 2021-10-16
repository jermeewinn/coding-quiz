var questions = [
    {
        question: "What is Javascript mainly used for?",
        answers: ["banana", "apples", "oranges", "websites"],
        correct: 3
    }, {
        question: "What is Javascript mainly used for?",
        answers: ["banana", "apples", "oranges", "websites"],
        correct: 3
    }
]

var currQuestionIndex = 0

var introContainerEl = document.getElementById("intro-container");
var hiScoreContainerEl = document.getElementById("high-score-container");
var questionContainerEl = document.getElementById("question-container");
var getIdBtn = document.getElementById("start-button")

getIdBtn.addEventListener("click", function () {
    introContainerEl.style.display = "none";
    hiScoreContainerEl.style.display = "none";
})
//steps from here: set up a class in CSS called hide. In JS, add that class to the main tag.
//look into setAttribute

//=====Step 1
//Start the game by clicking start on the landing pg.
//Clicking hides all displays except for question container.
//It should also start the timer.
//It should also populate questions and answers to the page.

//=====Step 2
//User clicks on an answer, and we check if that is correct or not.
//If it is correct, nothing happens.
//If it is incorrect, there is a time penalty of 10sec.
//Change right/wrong text to reflect if answer is right/wrong.
//We increment the current question.
//We display new current question to the user.

//=====Step 3
//Repeat Step 2 until we are out of questions.
//Stop the timer.
//Display submit-score.
//User inputs initials and clicks submit.
//On submit, save user initials and their score to local storage.

//=====Step 4
//User clicks play again. Restarts from step 1.
