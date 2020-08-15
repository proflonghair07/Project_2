/* eslint-disable no-unused-vars */
$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  /*
  startButton.on("click", function(event) {
//    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple", {
      type: "GET"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
*/


});

//quiz test
const quizContainer = document.getElementById("quiz");
const scoreInput = document.getElementById("score-input");
const gameoverDiv = document.getElementById("end-display");
const questionsDiv = document.getElementById("questions");
const quizTimer = document.getElementById("timer");
const startButton = document.getElementById("start-button");
const startContainer = document.getElementById("start-container");
const highscoreContainer = document.getElementById("highscore-container");
const highScoreInner = document.getElementById("high-score-inner");
const highScoreInitialsInput = document.getElementById("initials");
const highScoreInitialsDisplay = document.getElementById("highscore-initials");
const initialsRow = document.getElementById("initials-row");
const scoreRow = document.getElementById("score-row");
const endButtons = document.getElementById("end-buttons");
const submitButton = document.getElementById("submit-button");
const goBack = document.getElementById("go-back");
const highScoreScoreDisplay = document.getElementById("highscore-score");
const buttonOne = document.getElementById("1");
const buttonTwo = document.getElementById("2");
const buttonThree = document.getElementById("3");
const buttonFour = document.getElementById("4");
const buttonGrid = document.getElementById("button-grid");
const displayCorrect = document.getElementById("display-correct");
const displayError = document.getElementById("display-error");
// Questions array
const questionsArray = [
  {
    question: "Which of the following is an example of camel case?",
    answerOne: "background-color",
    answerTwo: "BackgroundColor",
    answerThree: "backgroundColor",
    answerFour: "background.color",
    correctAnswer: "three"
  },
  {
    question: "JavaScript '_______' are containers for storing data values.",
    answerOne: "variables",
    answerTwo: "functions",
    answerThree: "strings",
    answerFour: "operators",
    correctAnswer: "one"
  },
  {
    question:
      "Which of the following is NOT an example of a conditional statement?",
    answerOne: "if",
    answerTwo: "of",
    answerThree: "else if",
    answerFour: "else",
    correctAnswer: "two"
  },
  {
    question: "What HTML tag is used to link to JavaScript",
    answerOne: "&lt;main&gt;",
    answerTwo: "&lt;link&gt;",
    answerThree: "&lt;javascript&gt;",
    answerFour: "&lt;script&gt;",
    correctAnswer: "four"
  },
  {
    question:
      "What is the proper syntax to have JavaScript write 'Hello World'?",
    answerOne: "document.write('Hello World')",
    answerTwo: "var = helloWorld",
    answerThree: "¡Hola Mundo!",
    answerFour: "printDocument.hello_world",
    correctAnswer: "one"
  },
  {
    question: "Boolean data types are represented by what type of value?",
    answerOne: "words",
    answerTwo: "numbers",
    answerThree: "True/False",
    answerFour: "letters",
    correctAnswer: "three"
  },
  {
    question:
      "A/an '_______' is a mathematical symbol that creates an output based on two values.",
    answerOne: "function",
    answerTwo: "algorithm",
    answerThree: "console",
    answerFour: "operator",
    correctAnswer: "four"
  },
  {
    question: "What does NaN stand for?",
    answerOne: "not always newline",
    answerTwo: "now a number",
    answerThree: "nearly a node",
    answerFour: "not a number",
    correctAnswer: "four"
  }
];
// More variables
const finalQuestionIndex = questionsArray.length;
let currentQuestionIndex = 0;
let timeLeft = 75;
let timerValue;
let score = 0;
let correct;
// Cycle through the array of quiz questions and answers and then prints them to the quiz div
function generateQuestions() {
  gameoverDiv.style.display = "none";
  if (currentQuestionIndex === finalQuestionIndex) {
    return displayScore();
  }
  const currentQuestion = questionsArray[currentQuestionIndex];
  questionsDiv.innerHTML = "<p>" + currentQuestion.question + "</p>";
  buttonOne.innerHTML = currentQuestion.answerOne;
  buttonTwo.innerHTML = currentQuestion.answerTwo;
  buttonThree.innerHTML = currentQuestion.answerThree;
  buttonFour.innerHTML = currentQuestion.answerFour;
}
// Start the quiz by calling the generateQuestions function and starts the timer. hide gameoverDiv and startContainer.  Show quizContainer.
function startQuiz() {

  $.ajax("/api/startquiz", {
    type: "POST"
  }).then(
    function(response) {
//      console.log("quiz api called");
      // Reload the page to get the updated list
      alert("response to ajax call " + response.results);
//      location.reload();
    }
  );