// ==========================================
// CodeSphere Challenge - questions.js
// ==========================================

const quizData = {

  // ==========================================
  // HTML → 3 Questions
  // ==========================================

  html: {

    easy: [

      {
        question: "What does HTML stand for?",

        options: [
          "Hyper Text Markup Language",
          "High Transfer Machine Language",
          "Hyperlink and Text Markup Language",
          "Home Tool Markup Language"
        ],

        correct: "Hyper Text Markup Language"
      }

    ],

    medium: [

      {
        question: "Which input type is used for email fields?",

        options: [
          "text",
          "mail",
          "email",
          "input-email"
        ],

        correct: "email"
      }

    ],

    hard: [

      {
        question: "Which HTML attribute specifies an alternate text for images?",

        options: [
          "src",
          "alt",
          "title",
          "href"
        ],

        correct: "alt"
      }

    ]

  },

  // ==========================================
  // CSS → 6 Questions
  // ==========================================

  css: {

    easy: [

      {
        question: "Which CSS property changes text color?",

        options: [
          "font-color",
          "text-color",
          "color",
          "background-color"
        ],

        correct: "color"
      },

      {
        question: "Which CSS property controls text size?",

        options: [
          "font-style",
          "text-size",
          "font-size",
          "size"
        ],

        correct: "font-size"
      }

    ],

    medium: [

      {
        question: "Which property is used for Flexbox layout?",

        options: [
          "display: flex",
          "position: flex",
          "layout: flex",
          "flexbox: true"
        ],

        correct: "display: flex"
      },

      {
        question: "Which property adds space inside an element?",

        options: [
          "margin",
          "spacing",
          "padding",
          "border"
        ],

        correct: "padding"
      }

    ],

    hard: [

      {
        question: "Which property controls the stacking order of elements?",

        options: [
          "z-index",
          "position",
          "display",
          "overflow"
        ],

        correct: "z-index"
      },

      {
        question: "Which CSS unit is relative to the root element font size?",

        options: [
          "em",
          "px",
          "rem",
          "%"
        ],

        correct: "rem"
      }

    ]

  },

  // ==========================================
  // JavaScript → 6 Questions
  // ==========================================

  javascript: {

    easy: [

      {
        question: "Which keyword declares a variable in JavaScript?",

        options: [
          "var",
          "int",
          "string",
          "declare"
        ],

        correct: "var"
      },

      {
        question: "Which symbol is used for comments in JavaScript?",

        options: [
          "//",
          "##",
          "<!-- -->",
          "**"
        ],

        correct: "//"
      }

    ],

    medium: [

      {
        question: "Which method converts JSON to a JavaScript object?",

        options: [
          "JSON.parse()",
          "JSON.stringify()",
          "JSON.convert()",
          "JSON.object()"
        ],

        correct: "JSON.parse()"
      },

      {
        question: "Which event occurs when a button is clicked?",

        options: [
          "onhover",
          "onchange",
          "onclick",
          "onmouse"
        ],

        correct: "onclick"
      }

    ],

    hard: [

      {
        question: "Which JavaScript method is used to select an element by ID?",

        options: [
          "querySelectorAll()",
          "getElementByClass()",
          "getElementById()",
          "selectById()"
        ],

        correct: "getElementById()"
      },

      {
        question: "Which keyword is used for asynchronous functions?",

        options: [
          "await",
          "async",
          "promise",
          "setTimeout"
        ],

        correct: "async"
      }

    ]

  }

};