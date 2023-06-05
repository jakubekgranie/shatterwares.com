const _question = document.getElementById("question");
const _options = document.querySelector(".quiz-options");
const _checkBtn = document.getElementById("check-answer");
const _playAgainBtn = document.getElementById("play-again");
const _result = document.getElementById("result");
const _correctScore = document.getElementById("correct-score");
const _totalQuestion = document.getElementById("total-question");

let correctAnswer = "",
  correctScore = (askedCount = 0),
  totalQuestion = 10;

// przykładowe pytania
const myQuestions = [
  {
    category: "Historia",
    question: "Jakimi terenami powetował sobie Łokietek w 1314 r. w związku ze stratą Pomorza?",
    options: ["Małopolską", "Kujawami", "Państwem Zakonu Krzyżackiego", "Śląskiem"],
    correctAnswer: "Wielkopolską",
  },
  {
    category: "Historia",
    question: "Kto był ojcem Władysława Łokietka?",
    options: [
      "Kazimierz II Kujawski",
      "Wacław II",
      "Kazimierz I Opolski",
      "Jan Luksemburczyk",
    ],
    correctAnswer: "Kazimierz I Kujawski",
  },
  {
    category: "Historia",
    question: "Jakie reformy przeprowadził Władysław Łokietek?",
    options: [
      "Reformy gospodarcze",
      "Reformy wojskowe i edukacyjne",
      "Reformy religijne i kulturalne",
      "Reformy polityczne i prawne",
    ],
    correctAnswer: "Reformy gospodarcze i administracyjne",
  },
  {
    category: "Historia",
    question: "W którym roku odbyła się koronacja Władysława Łokietka?",
    options: ["w 1314 roku.", "w 1331 roku.", "w 1321 roku.", "w 1308 roku."],
    correctAnswer: "w 1320 roku.",
  },
  {
    category: "Historia",
    question: "Kto koronował Władysława Łokietka na króla Polski?",
    options: ["Jan Muskata", "Albert", "Janek", "Jan Luksemburczyk"],
    correctAnswer: "Janisław",
  },
  {
    category: "Historia",
    question:
      "Jak na imię miał 'wódz' buntu mieszczan krakowskich (lata 1311 - 1312)?",
    options: [
      "Oliver",
      "Piast",
      "Karol",
      "Honorata",
    ],
    correctAnswer: "Albert",
  },
  {
    category: "Historia",
    question: "Jak zakończyła się wojna z Krzyżakami dla Polski?",
    options: [
      "Zwycięstwem Polski.",
      "Nie było żadnej wojny.",
      "Zawieszeniem broni.",
      "Pokojowym traktatem.",
    ],
    correctAnswer: "Porażką Polski",
  },
  {
    category: "Historia",
    question:
      "Kto wystąpił z roszczeniami do korony polskiej i miał poparcie możnych małopolskich?",
    options: ["Jan Muskata", "Albert", "Jakub Muskata", "Janisław"],
    correctAnswer: "Wacław II",
  },
  {
    category: "Historia",
    question:
      "Które z poniższych terytoriów było/y jednym ze zdobytych obszarów przez Krzyżaków w trakcie wojny z Władysławem Łokietkiem?",
    options: [
      "Malbork i okolice",
      "Kraków",
      "Ozimek",
      "Krzyżacy nic nie zdobyli.",
    ],
    correctAnswer: "Ziemia dobrzyńska i Kujawy",
  },
  {
    category: "Historia",
    question: "Przydomek Władysława Łokietka - z jaką jego cechą miał powiązanie?",
    options: [
      "Z jego wysokim wzrostem.",
      "Z jego inteligencją.",
      "Z jego kurtuazją.",
      "Z jego uczciwością.",
    ],
    correctAnswer: "Z jego niskim wzrostem.",
  },

  // dodaj więcej własnych pytań tutaj
];

// Funkcja do losowego tasowania odpowiedzi
function shuffleAnswers(answers) {
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[j]] = [answers[j], answers[i]];
  }
  return answers;
}

// Wykorzystanie funkcji do tasowania odpowiedzi dla każdego pytania
myQuestions.forEach((question) => {
  question.options = shuffleAnswers(question.options);
});

// Wyświetlanie pytań i odpowiedzi
myQuestions.forEach((question, index) => {
  console.log(`Pytanie ${index + 1}: ${question.question}`);
  console.log("Odpowiedzi:");
  question.options.forEach((option, optionIndex) => {
    console.log(`${optionIndex + 1}. ${option}`);
  });
  console.log(`Poprawna odpowiedź: ${question.correctAnswer}`);
  console.log("----------------------");
});

// zmodyfikowana funkcja loadQuestion() z własnymi pytaniami
// zmodyfikowana funkcja loadQuestion() z własnymi pytaniami
function loadQuestion() {
  const availableQuestions = myQuestions.filter((question) => !question.asked);
  if (availableQuestions.length === 0) {
    // Wszystkie pytania zostały zadane, zakończ quiz lub podjęj odpowiednie działanie
    return;
  }
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  const question = availableQuestions[questionIndex];
  question.asked = true;

  const optionsWithoutCorrectAnswer = question.options.filter(
    (option) => option !== question.correctAnswer
  );

  _result.innerHTML = "";
  showQuestion(question, optionsWithoutCorrectAnswer);
}

// event listeners
function eventListeners() {
  _checkBtn.addEventListener("click", checkAnswer);
  _playAgainBtn.addEventListener("click", restartQuiz);
}

document.addEventListener("DOMContentLoaded", function () {
  eventListeners();
  _totalQuestion.textContent = totalQuestion;
  _correctScore.textContent = correctScore;
  loadQuestion(); // Dodane wywołanie funkcji loadQuestion() na początku
});

// display question and options
function showQuestion(data) {
  _checkBtn.disabled = false;
  correctAnswer = data.correctAnswer;
  let incorrectAnswer = data.options;
  let optionsList = incorrectAnswer.slice(0, 3); // Wybierz pierwsze 3 odpowiedzi
  optionsList.splice(
    Math.floor(Math.random() * 4), // Wylosuj indeks dla poprawnej odpowiedzi
    0,
    correctAnswer
  );

  _question.innerHTML = `${data.question} <br> <span class="category">${data.category}</span>`;
  _options.innerHTML = optionsList
    .map(
      (option, index) => `
        <li>${index + 1}. <span>${option}</span></li>
      `
    )
    .join("");
  selectOption();
}

// options selection
function selectOption() {
  _options.querySelectorAll("li").forEach(function (option) {
    option.addEventListener("click", function () {
      if (_options.querySelector(".selected")) {
        const activeOption = _options.querySelector(".selected");
        activeOption.classList.remove("selected");
      }
      option.classList.add("selected");
    });
  });
}

// answer checking
function checkAnswer() {
  _checkBtn.disabled = true;
  if (_options.querySelector(".selected")) {
    let selectedAnswer = _options.querySelector(".selected span").textContent;
    if (selectedAnswer == HTMLDecode(correctAnswer)) {
      correctScore++;
      _result.innerHTML = `<p><i class = "fas fa-check"></i>Dobra Odpowiedź!</p>`;
    } else {
      _result.innerHTML = `<p><i class = "fas fa-times"></i>Zła Odpowiedź!</p> <small><b>Poprawna odpowiedź: </b>${correctAnswer}</small>`;
    }
    checkCount();
  } else {
    _result.innerHTML = `<p><i class = "fas fa-question"></i>Prosze wybrać opcję!</p>`;
    _checkBtn.disabled = false;
  }
}

// to convert html entities into normal text of correct answer if there is any
function HTMLDecode(textString) {
  let doc = new DOMParser().parseFromString(textString, "text/html");
  return doc.documentElement.textContent;
}

function checkCount() {
  askedCount++;
  setCount();
  if (askedCount == totalQuestion) {
    setTimeout(function () {
      console.log("");
    }, 5000);

    _result.innerHTML += `<p>Twój wynik to ${correctScore}.</p>`;
    _playAgainBtn.style.display = "block";
    _checkBtn.style.display = "none";
  } else {
    setTimeout(function () {
      loadQuestion();
    }, 2000);
  }
}

function setCount() {
  _totalQuestion.textContent = totalQuestion;
  _correctScore.textContent = correctScore;
}

function restartQuiz() {
  correctScore = askedCount = 0;
  _playAgainBtn.style.display = "none";
  _checkBtn.style.display = "block";
  _checkBtn.disabled = false;
  setCount();
  loadQuestion();
}