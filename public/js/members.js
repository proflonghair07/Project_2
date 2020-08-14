/* eslint-disable no-unused-vars */
$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
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
  gameoverDiv.style.display = "none";
  startContainer.style.display = "none";
  generateQuestions();
  displayCorrect.innerHTML = "";

  //Timer
  timerValue = setInterval(() => {
    timeLeft--;
    quizTimer.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerValue);
      displayScore();
      return;
    }
  }, 1000);
  quizContainer.style.display = "block";
}
// Render high score to the page by showing gameoverDiv and hiding quizContainer.  Display if all questions are answered or if timer runs out.
function displayScore() {
  quizContainer.style.display = "none";
  gameoverDiv.style.display = "flex";
  clearInterval(timerValue);
  highScoreInitialsInput.value = "";
  scoreInput.innerHTML =
    "You correctly answered " + score + " out of 8 questions";
}
// Save and stringify the array of high scores in local storage. Add new user initials and score to array. Show high scores.
submitButton.addEventListener("click", () => {
  if (highScoreInitialsInput.value === "") {
    displayError.textContent = "Cannot leave initials blank.";
    return false;
  }
  const savedHighscores =
    JSON.parse(localStorage.getItem("savedHighscores")) || [];
  const currentUser = highScoreInitialsInput.value.trim();
  const currentHighscore = {
    name: currentUser,
    score: score
  };

  gameoverDiv.style.display = "none";
  highscoreContainer.style.display = "flex";
  highScoreInner.style.display = "block";
  endButtons.style.display = "flex";

  savedHighscores.push(currentHighscore);
  localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
  generateHighscores();
});
// Clear the current list of high scores and generate a new one from local storage.
function generateHighscores() {
  highScoreInitialsDisplay.innerHTML = "";
  highScoreScoreDisplay.innerHTML = "";
  const highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
  for (i = 0; i < highscores.length; i++) {
    const newNameSpan = document.createElement("li");
    const newScoreSpan = document.createElement("li");
    newNameSpan.textContent = highscores[i].name;
    newScoreSpan.textContent = highscores[i].score;
    highScoreInitialsDisplay.appendChild(newNameSpan);
    highScoreScoreDisplay.appendChild(newScoreSpan);
  }
}
// Show high score display and hide all other elements aside from endButtons.
function showHighscore() {
  startContainer.style.display = "none";
  gameoverDiv.style.display = "none";
  highscoreContainer.style.display = "flex";
  highScoreInner.style.display = "block";
  endButtons.style.display = "flex";
  quizContainer.style.display = "none";
  generateHighscores();
}
// Clear high scores from local storage and render highScoreInitialsDisplay and highScoreScoreDisplay empty.
function clearScore() {
  window.localStorage.clear();
  highScoreInitialsDisplay.textContent = "";
  highScoreScoreDisplay.textContent = "";
}
// Set values of timeLeft, score, and currentQuestionsIndex to initial value and show startContainer while hiding highscoreContainer and gameoverDiv.
function restart() {
  highscoreContainer.style.display = "none";
  gameoverDiv.style.display = "none";
  startContainer.style.display = "flex";
  timeLeft = 75;
  score = 0;
  currentQuestionIndex = 0;
}
// Check answers and  if correct add 1 to currentQuestionIndex.  Display Correct! or Wrong! to displayCorrect if the answers are true or wrong.  Subtract 10 seconds from timer if answer is wrong.
function checkAnswer(answer) {
  correct = questionsArray[currentQuestionIndex].correctAnswer;
  quizTimer.textContent = timeLeft;
  if (answer === correct && currentQuestionIndex !== finalQuestionIndex) {
    score++;
    displayCorrect.innerHTML = "<hr/>Correct!";
    currentQuestionIndex++;
    generateQuestions();
  } else if (
    answer !== correct &&
    currentQuestionIndex !== finalQuestionIndex
  ) {
    timeLeft = timeLeft - 10;
    displayCorrect.innerHTML = "<hr/>Wrong!";
    currentQuestionIndex++;
    generateQuestions();
  } else {
    displayScore();
  }
}
// Using an event listener start the quiz on click of the start button
startButton.addEventListener("click", startQuiz);
