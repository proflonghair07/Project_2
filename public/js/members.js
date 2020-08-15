/* eslint-disable no-unused-vars */
$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then((data) => {
    $(".member-name").text(data.email);
  });
});

//quiz test
// const quizContainer = document.getElementById("quiz");
// const scoreInput = document.getElementById("score-input");
// const gameoverDiv = document.getElementById("end-display");
// const questionsDiv = document.getElementById("questions");
// const quizTimer = document.getElementById("timer");
// const startButton = document.getElementById("start-button");
// const startContainer = document.getElementById("start-container");
// const highscoreContainer = document.getElementById("highscore-container");
// const highScoreInner = document.getElementById("high-score-inner");
// const highScoreInitialsInput = document.getElementById("initials");
// const highScoreInitialsDisplay = document.getElementById("highscore-initials");
// const initialsRow = document.getElementById("initials-row");
// const scoreRow = document.getElementById("score-row");
// const endButtons = document.getElementById("end-buttons");
// const submitButton = document.getElementById("submit-button");
// const goBack = document.getElementById("go-back");
// const highScoreScoreDisplay = document.getElementById("highscore-score");
// const buttonOne = document.getElementById("1");
// const buttonTwo = document.getElementById("2");
// const buttonThree = document.getElementById("3");
// const buttonFour = document.getElementById("4");
// const buttonGrid = document.getElementById("button-grid");
// const displayCorrect = document.getElementById("display-correct");
// const displayError = document.getElementById("display-error");
// // Questions array
// const questionsArray = [
//   {
//     question: "Which of the following is an example of camel case?",
//     answerOne: "background-color",
//     answerTwo: "BackgroundColor",
//     answerThree: "backgroundColor",
//     answerFour: "background.color",
//     correctAnswer: "three",
//   },
//   {
//     question: "JavaScript '_______' are containers for storing data values.",
//     answerOne: "variables",
//     answerTwo: "functions",
//     answerThree: "strings",
//     answerFour: "operators",
//     correctAnswer: "one",
//   },
//   {
//     question:
//       "Which of the following is NOT an example of a conditional statement?",
//     answerOne: "if",
//     answerTwo: "of",
//     answerThree: "else if",
//     answerFour: "else",
//     correctAnswer: "two",
//   },
//   {
//     question: "What HTML tag is used to link to JavaScript",
//     answerOne: "&lt;main&gt;",
//     answerTwo: "&lt;link&gt;",
//     answerThree: "&lt;javascript&gt;",
//     answerFour: "&lt;script&gt;",
//     correctAnswer: "four",
//   },
//   {
//     question:
//       "What is the proper syntax to have JavaScript write 'Hello World'?",
//     answerOne: "document.write('Hello World')",
//     answerTwo: "var = helloWorld",
//     answerThree: "¡Hola Mundo!",
//     answerFour: "printDocument.hello_world",
//     correctAnswer: "one",
//   },
//   {
//     question: "Boolean data types are represented by what type of value?",
//     answerOne: "words",
//     answerTwo: "numbers",
//     answerThree: "True/False",
//     answerFour: "letters",
//     correctAnswer: "three",
//   },
//   {
//     question:
//       "A/an '_______' is a mathematical symbol that creates an output based on two values.",
//     answerOne: "function",
//     answerTwo: "algorithm",
//     answerThree: "console",
//     answerFour: "operator",
//     correctAnswer: "four",
//   },
//   {
//     question: "What does NaN stand for?",
//     answerOne: "not always newline",
//     answerTwo: "now a number",
//     answerThree: "nearly a node",
//     answerFour: "not a number",
//     correctAnswer: "four",
//   },
// ];
// // More variables
// const finalQuestionIndex = questionsArray.length;
// let currentQuestionIndex = 0;
// let timeLeft = 75;
// let timerValue;
// let score = 0;
// let correct;
// // Cycle through the array of quiz questions and answers and then prints them to the quiz div
// function generateQuestions() {
//   gameoverDiv.style.display = "none";
//   if (currentQuestionIndex === finalQuestionIndex) {
//     return displayScore();
//   }
//   const currentQuestion = questionsArray[currentQuestionIndex];
//   questionsDiv.innerHTML = "<p>" + currentQuestion.question + "</p>";
//   buttonOne.innerHTML = currentQuestion.answerOne;
//   buttonTwo.innerHTML = currentQuestion.answerTwo;
//   buttonThree.innerHTML = currentQuestion.answerThree;
//   buttonFour.innerHTML = currentQuestion.answerFour;
// }
// // Start the quiz by calling the generateQuestions function and starts the timer. hide gameoverDiv and startContainer.  Show quizContainer.
// function startQuiz() {
//   $.ajax("/api/startquiz", {
//     type: "POST",
//   }).then(function(response) {
//     //      console.log("quiz api called");
//     // Reload the page to get the updated list
//     alert("response to ajax call " + response.results);
//     //      location.reload();
//   });

//   gameoverDiv.style.display = "none";
//   startContainer.style.display = "none";
//   generateQuestions();
//   displayCorrect.innerHTML = "";

//   //Timer
//   timerValue = setInterval(() => {
//     timeLeft--;
//     quizTimer.textContent = timeLeft;

//     if (timeLeft === 0) {
//       clearInterval(timerValue);
//       displayScore();
//       return;
//     }
//   }, 1000);
//   quizContainer.style.display = "block";
// }
// // Render high score to the page by showing gameoverDiv and hiding quizContainer.  Display if all questions are answered or if timer runs out.
// function displayScore() {
//   quizContainer.style.display = "none";
//   gameoverDiv.style.display = "flex";
//   clearInterval(timerValue);
//   highScoreInitialsInput.value = "";
//   scoreInput.innerHTML =
//     "You correctly answered " + score + " out of 8 questions";
// }
// // Save and stringify the array of high scores in local storage. Add new user initials and score to array. Show high scores.
// submitButton.addEventListener("click", () => {
//   if (highScoreInitialsInput.value === "") {
//     displayError.textContent = "Cannot leave initials blank.";
//     return false;
//   }
//   const savedHighscores =
//     JSON.parse(localStorage.getItem("savedHighscores")) || [];
//   const currentUser = highScoreInitialsInput.value.trim();
//   const currentHighscore = {
//     name: currentUser,
//     score: score,
//   };

//   gameoverDiv.style.display = "none";
//   highscoreContainer.style.display = "flex";
//   highScoreInner.style.display = "block";
//   endButtons.style.display = "flex";

//   savedHighscores.push(currentHighscore);
//   localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
//   generateHighscores();
// });
// // Clear the current list of high scores and generate a new one from local storage.
// function generateHighscores() {
//   highScoreInitialsDisplay.innerHTML = "";
//   highScoreScoreDisplay.innerHTML = "";
//   const highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
//   for (i = 0; i < highscores.length; i++) {
//     const newNameSpan = document.createElement("li");
//     const newScoreSpan = document.createElement("li");
//     newNameSpan.textContent = highscores[i].name;
//     newScoreSpan.textContent = highscores[i].score;
//     highScoreInitialsDisplay.appendChild(newNameSpan);
//     highScoreScoreDisplay.appendChild(newScoreSpan);
//   }
// }
// // Show high score display and hide all other elements aside from endButtons.
// function showHighscore() {
//   startContainer.style.display = "none";
//   gameoverDiv.style.display = "none";
//   highscoreContainer.style.display = "flex";
//   highScoreInner.style.display = "block";
//   endButtons.style.display = "flex";
//   quizContainer.style.display = "none";
//   generateHighscores();
// }
// // Clear high scores from local storage and render highScoreInitialsDisplay and highScoreScoreDisplay empty.
// function clearScore() {
//   window.localStorage.clear();
//   highScoreInitialsDisplay.textContent = "";
//   highScoreScoreDisplay.textContent = "";
// }
// // Set values of timeLeft, score, and currentQuestionsIndex to initial value and show startContainer while hiding highscoreContainer and gameoverDiv.
// function restart() {
//   highscoreContainer.style.display = "none";
//   gameoverDiv.style.display = "none";
//   startContainer.style.display = "flex";
//   timeLeft = 75;
//   score = 0;
//   currentQuestionIndex = 0;
// }
// // Check answers and  if correct add 1 to currentQuestionIndex.  Display Correct! or Wrong! to displayCorrect if the answers are true or wrong.  Subtract 10 seconds from timer if answer is wrong.
// function checkAnswer(answer) {
//   correct = questionsArray[currentQuestionIndex].correctAnswer;
//   quizTimer.textContent = timeLeft;
//   if (answer === correct && currentQuestionIndex !== finalQuestionIndex) {
//     score++;
//     displayCorrect.innerHTML = "<hr/>Correct!";
//     currentQuestionIndex++;
//     generateQuestions();
//   } else if (
//     answer !== correct &&
//     currentQuestionIndex !== finalQuestionIndex
//   ) {
//     timeLeft = timeLeft - 10;
//     displayCorrect.innerHTML = "<hr/>Wrong!";
//     currentQuestionIndex++;
//     generateQuestions();
//   } else {
//     displayScore();
//   }
// }
// // Using an event listener start the quiz on click of the start button
// startButton.addEventListener("click", startQuiz);

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById("loader");
const game = document.getElementById("game");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [];

fetch(
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
)
  .then((res) => {
    return res.json();
  })
  .then((loadedQuestions) => {
    questions = loadedQuestions.results.map((loadedQuestion) => {
      const formattedQuestion = {
        question: loadedQuestion.question,
      };

      const answerChoices = [...loadedQuestion.incorrect_answers];
      formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
      answerChoices.splice(
        formattedQuestion.answer - 1,
        0,
        loadedQuestion.correct_answer
      );

      answerChoices.forEach((choice, index) => {
        formattedQuestion["choice" + (index + 1)] = choice;
      });

      return formattedQuestion;
    });

    startGame();
  })
  .catch((err) => {
    console.error(err);
  });

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
  game.classList.remove("hidden");
  loader.classList.add("hidden");
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerHTML = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerHTML = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};
