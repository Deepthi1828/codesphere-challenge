// ==========================================
// CodeSphere Challenge - script.js
// ==========================================

// ==========================================
// Category Selection
// ==========================================

const categoryButtons =
  document.querySelectorAll(".category-btn");

let selectedCategory = "html";

categoryButtons.forEach((button) => {

  button.addEventListener("click", () => {

    categoryButtons.forEach((btn) => {

      btn.classList.remove("active");

    });

    button.classList.add("active");

    selectedCategory =
      button.dataset.category;

  });

});


// ==========================================
// DOM Elements
// ==========================================

const startBtn =
  document.getElementById("start-btn");

const welcomeScreen =
  document.getElementById("welcome-screen");

const quizScreen =
  document.getElementById("quiz-screen");

const resultScreen =
  document.getElementById("result-screen");

const questionElement =
  document.getElementById("question");

const optionsContainer =
  document.getElementById("options-container");

const nextBtn =
  document.getElementById("next-btn");

const prevBtn =
  document.getElementById("prev-btn");

const retryBtn =
  document.getElementById("retry-btn");

const continueBtn =
  document.getElementById("continue-btn");

const homeBtn =
  document.getElementById("home-btn");

const currentQuestionText =
  document.getElementById("current-question");

const totalQuestionsText =
  document.getElementById("total-questions");

const progressBar =
  document.getElementById("progress-bar");

const timerElement =
  document.getElementById("time");

const scoreText =
  document.getElementById("score-text");

const accuracyText =
  document.getElementById("accuracy-text");

const reviewContainer =
  document.getElementById("review-container");

const htmlScore =
  document.getElementById("html-score");

const cssScore =
  document.getElementById("css-score");

const jsScore =
  document.getElementById("js-score");


// ==========================================
// Variables
// ==========================================

let questions = [];

let currentQuestionIndex = 0;

let score = 0;

let timer;

let timeLeft = 15;


// ==========================================
// Final Category Scores
// ==========================================

let htmlFinalScore = 0;

let cssFinalScore = 0;

let jsFinalScore = 0;


// ==========================================
// Generate Questions
// ==========================================

function generateQuestions() {

  questions = [

    ...quizData[selectedCategory].easy,

    ...quizData[selectedCategory].medium,

    ...quizData[selectedCategory].hard

  ];

}


// ==========================================
// Start Quiz
// ==========================================

startBtn.addEventListener("click", () => {

  generateQuestions();

  currentQuestionIndex = 0;

  score = 0;

  totalQuestionsText.textContent =
    questions.length;

  welcomeScreen.classList.add("hidden");

  quizScreen.classList.remove("hidden");

  loadQuestion();

});


// ==========================================
// Load Question
// ==========================================

function loadQuestion() {

  clearInterval(timer);

  const currentQuestion =
    questions[currentQuestionIndex];

  questionElement.textContent =
    currentQuestion.question;

  currentQuestionText.textContent =
    currentQuestionIndex + 1;

  totalQuestionsText.textContent =
    questions.length;

  const progress =
    ((currentQuestionIndex + 1)
      / questions.length) * 100;

  progressBar.style.width =
    `${progress}%`;

  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach((option) => {

    const button =
      document.createElement("button");

    button.classList.add("option-btn");

    button.textContent = option;

    if (
      currentQuestion.selectedAnswer ===
      option
    ) {

      button.classList.add("selected");

    }

    button.addEventListener("click", () => {

      selectOption(button, option);

    });

    optionsContainer.appendChild(button);

  });

  prevBtn.style.display =
    currentQuestionIndex === 0
      ? "none"
      : "block";

  nextBtn.textContent =
    currentQuestionIndex ===
    questions.length - 1
      ? "Submit Challenge"
      : "Next Question";

  startTimer();

}


// ==========================================
// Select Option
// ==========================================

function selectOption(button, option) {

  const buttons =
    document.querySelectorAll(".option-btn");

  buttons.forEach((btn) => {

    btn.classList.remove("selected");

  });

  button.classList.add("selected");

  questions[currentQuestionIndex]
    .selectedAnswer = option;

}


// ==========================================
// Timer
// ==========================================

function startTimer() {

  clearInterval(timer);

  timeLeft = 15;

  timerElement.textContent =
    timeLeft;

  timer = setInterval(() => {

    timeLeft--;

    timerElement.textContent =
      timeLeft;

    if (timeLeft <= 0) {

      clearInterval(timer);

      nextQuestion();

    }

  }, 1000);

}


// ==========================================
// Next Question
// ==========================================

function nextQuestion() {

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {

    loadQuestion();

  }

  else {

    calculateScore();

    showResults();

  }

}

nextBtn.addEventListener("click", () => {

  nextQuestion();

});


// ==========================================
// Previous Question
// ==========================================

prevBtn.addEventListener("click", () => {

  if (currentQuestionIndex > 0) {

    currentQuestionIndex--;

    loadQuestion();

  }

});


// ==========================================
// Calculate Score
// ==========================================

function calculateScore() {

  score = 0;

  questions.forEach((question) => {

    if (
      question.selectedAnswer ===
      question.correct
    ) {

      score++;

    }

  });

}


// ==========================================
// Show Results
// ==========================================

function showResults() {

  clearInterval(timer);

  quizScreen.classList.add("hidden");

  resultScreen.classList.remove("hidden");

  // ======================================
  // Store Individual Scores
  // ======================================

  if (selectedCategory === "html") {

    htmlFinalScore = score;

    htmlScore.textContent =
      `${htmlFinalScore} / 3`;

  }

  if (selectedCategory === "css") {

    cssFinalScore = score;

    cssScore.textContent =
      `${cssFinalScore} / 6`;

  }

  if (selectedCategory === "javascript") {

    jsFinalScore = score;

    jsScore.textContent =
      `${jsFinalScore} / 6`;

  }

  // ======================================
  // Total Combined Score
  // ======================================

  const totalFinalScore =

    htmlFinalScore +
    cssFinalScore +
    jsFinalScore;

  scoreText.textContent =
    `${totalFinalScore} / 15`;

  // ======================================
  // Accuracy
  // ======================================

  const accuracy =
    Math.round(
      (totalFinalScore / 15) * 100
    );

  accuracyText.textContent =
    `${accuracy}%`;

  // ======================================
  // Review Answers
  // ======================================

  reviewContainer.innerHTML = "";

  questions.forEach((question) => {

    const selectedAnswer =
      question.selectedAnswer ||
      "Not Answered";

    const div =
      document.createElement("div");

    div.classList.add("review-box");

    div.innerHTML = `

      <h4>${question.question}</h4>

      <p>
        Your Answer:
        <span>${selectedAnswer}</span>
      </p>

      <p>
        Correct Answer:
        <span>${question.correct}</span>
      </p>

    `;

    reviewContainer.appendChild(div);

  });

}


// ==========================================
// Retry Challenge
// ==========================================

retryBtn.addEventListener("click", () => {

  questions.forEach((question) => {

    delete question.selectedAnswer;

  });

  currentQuestionIndex = 0;

  score = 0;

  resultScreen.classList.add("hidden");

  quizScreen.classList.remove("hidden");

  loadQuestion();

});


// ==========================================
// Continue To Next Category
// ==========================================

continueBtn.addEventListener("click", () => {

  if (selectedCategory === "html") {

    selectedCategory = "css";

  }

  else if (selectedCategory === "css") {

    selectedCategory = "javascript";

  }

  else {

    selectedCategory = "html";

  }

  categoryButtons.forEach((btn) => {

    btn.classList.remove("active");

    if (
      btn.dataset.category ===
      selectedCategory
    ) {

      btn.classList.add("active");

    }

  });

  generateQuestions();

  currentQuestionIndex = 0;

  score = 0;

  resultScreen.classList.add("hidden");

  quizScreen.classList.remove("hidden");

  loadQuestion();

});


// ==========================================
// Back To Home
// ==========================================

homeBtn.addEventListener("click", () => {

  resultScreen.classList.add("hidden");

  quizScreen.classList.add("hidden");

  welcomeScreen.classList.remove("hidden");

});