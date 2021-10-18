var questions = [
    {
        question: "What is Javascript mainly used for?",
        answers: ["Creating the backbone of the website.", 
        "Creating the means of interactivity within a website.", 
        "Gives a website color and styling.", 
        "Acts as a repository for all of your websites."],
        correct: 1
    }, {
        question: "What do you use to wrap a function in a script.js file?",
        answers: ["Parenthesis, ( )", 
        "Brackets, [ ]", 
        "Braces, { }", 
        "Chevrons, < >"],
        correct: 2
    }, {
        question: "A named location for a value that gets stored in a browser's memory when a program is run is called a:",
        answers: ["Variable",
        "Function",
        "String Concatenation",
        "Function Declaration"],
        correct: 0
    }, {
        question: "What is a state?",
        answers: ["The act of expressing something in speech or writing.",
        "A way for matter to exist within physics.",
        "A territory with its own ogovernment and borders within a larger country.",
        "Data in an application at a specific point in time."],
        correct: 3
    }, {
        question: "What does pseudocode do?",
        answers: ["It acts as a way to cut down on the lines of code needed in your script.js file.",
        "It accesses a 3rd-party library of javascript code from sights like jQuery and Boostrap.",
        "It is a plain-language description of the steps that an algorithm must complete.",
        "A means of combining plain-text and code into your script.js file to add further functionality to your application."],
        correct: 2
    }, {
        question: "Data that only holds one value, such as a string, number, or boolean is called:",
        answers: ["Primitive Data",
        "Civilized Data",
        "Composite Data",
        "Abstract Data"],
        correct: 0 
    }, {
        question: "What stores data as a list?",
        answers: ["Functions",
        "Objects",
        "Loops",
        "Arrays"],
        correct: 3
    }, {
        question: "A type of control flow statement that repeatedly executes a statement while a condition remains true is called a:",
        answers: ["For Loop",
        "While Loop",
        "Loopty Loop",
        "None of the Above"],
        correct: 1
    }, {
        question: "Variables declared in a local scope are applicable in __________.",
        answers: ["Local Scope",
        "Everywhere Else",
        "Global Scope",
        "CSS stylesheets"],
        correct: 0
    }, {
        question: "A function declaration is when we create a function by assigning it to a variable.",
        answers: ["True",
        "False",
        "Unknown",
        "Known, but don't really care right now."],
        correct: 1
    }
]

var currQuestionIndex = 0

var introContainerEl = document.getElementById("intro-container");
var hiScoreContainerEl = document.getElementById("high-score-container");
var questionContainerEl = document.getElementById("question-container");
var questionTextEl = document.getElementById("question");
var answer1El = document.getElementById("answer-1");
var answer2El = document.getElementById("answer-2");
var answer3El = document.getElementById("answer-3");
var answer4El = document.getElementById("answer-4");
var getIdBtn = document.getElementById("start-button")
var submitScoreEl = document.getElementById("submit-score-container");
var timeLeft = 10

//=====Step 1
//Start the game by clicking start on the landing pg.
//Clicking hides all displays except for question container.
//It should also start the timer.
getIdBtn.addEventListener("click", function () {
    introContainerEl.style.display = "none";
    hiScoreContainerEl.style.display = "none";
    questionContainerEl.style.display = "block"
    answer1El.addEventListener("click", submitAnswer);
    answer2El.addEventListener("click", submitAnswer);
    answer3El.addEventListener("click", submitAnswer);
    answer4El.addEventListener("click", submitAnswer);
    populateQuestion()
})

function countdown() {
    timeLeft = 60;
    var timeInterval = setInterval(function() {
        timeInterval.textContent = timeLeft;
        if(timeLeft <= 0){
            timeInterval.textContent = "";
            clearInterval(timeInterval);
            currQuestionIndex = questions + 10
            removeReplace();
            populateQuestion;
        }
        timeLeft--;
    }, 1000);
};
//It should also populate questions and answers to the page.
function populateQuestion(){
    //get current question
    var currQuestion = questions[currQuestionIndex]
    console.log("currQuestion: ", currQuestion)
    questionTextEl.textContent = currQuestion.question;
    answer1El.textContent = currQuestion.answers[0];
    answer2El.textContent = currQuestion.answers[1];
    answer3El.textContent = currQuestion.answers[2];
    answer4El.textContent = currQuestion.answers[3];
}
//=====Step 2
//User clicks on an answer, and we check if that is correct or not.
//If it is correct, nothing happens.
//If it is incorrect, there is a time penalty of 10sec.
//We increment the current question.
//We display new current question to the user.
function submitAnswer() {
    console.log(this.dataset.answer)
    if (this.dataset.answer == questions[currQuestionIndex].correct){
        console.log("answer correct");
        currQuestionIndex++;
        populateQuestion()
    } else {
        console.log("answer incorrect");
        currQuestionIndex++;
        populateQuestion()
    }
} 
//=====Step 3
//Repeat Step 2 until we are out of questions.
//Stop the timer.
//Display submit-score.
//User inputs initials and clicks submit.
//On submit, save user initials and their score to local storage.
var removeQuiz = function() {
    if (currQuestionIndex < questions.length){
        questions++;      
    } else {
        document.getElementById("questionContainerEl").remove();
        var populateSubmitScore = submitScoreEl.style.display = "block";
        populateSubmitScore()
    }
}
    

    

//=====Step 4
//User clicks play again. Restarts from step 1