let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Wer ist Harry Potters bester Freund?",
    answer_1: "Ron Weasley",
    answer_2: "Hermine Granger",
    answer_3: "Severus Snape",
    answer_4: "Der fast kopflose Nick",
    right_answer: 1,
  },
  {
    question: "Wovon enthält Milch den größten Anteil?",
    answer_1: "Milchfett",
    answer_2: "Wasser",
    answer_3: "Kohlenhydrate",
    answer_4: "Eiweiße",
    right_answer: 2,
  },
  {
    question: "Wie hieß der erste Mensch im Weltall?",
    answer_1: "James Tiberius Kirk",
    answer_2: "Jean-Luc Picard",
    answer_3: "Junus Ergin",
    answer_4: "Juri Gagarin",
    right_answer: 4,
  }
];

let currentQuestion = 0;
let points = 0;

function init() {
  document.getElementById('numberQ').innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (Number(document.getElementById('numberCurrentQ').innerHTML) > Number(document.getElementById('numberQ').innerHTML)) {
    document.getElementById('endscreen').style = "display: flex";
    document.getElementById('quizQuestions').style = "display: none";
    document.getElementById('picture').src = "img/card2.png";
    document.getElementById('numberAllQ').innerHTML = questions.length;
    document.getElementById('numberOfRightAnswers').innerHTML = points;
  } else {
    let question = questions[currentQuestion];

    document.getElementById("questionText").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedNumber = selection.slice(-1);
  let idOFRightAnswer = `answer_${question["right_answer"]}`;
  if (selectedNumber == question["right_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    points++;
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document.getElementById(idOFRightAnswer).parentNode.classList.add("bg-success");
  }
  let percent = Number(document.getElementById("numberCurrentQ").innerHTML)/questions.length;
  percent = Math.round(percent*100);
  document.getElementById('progressbarPercent').style = `width: ${percent}%;`;
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("numberCurrentQ").innerHTML = Number(document.getElementById("numberCurrentQ").innerHTML) + 1;
  showQuestion();
  resetAnswers();
  document.getElementById("next-button").disabled = true;
}

function resetAnswers() {
  for (let i = 1; i <= 4; i++) {
    document
      .getElementById(`answer_${i}`)
      .parentNode.classList.remove("bg-success");
    document
      .getElementById(`answer_${i}`)
      .parentNode.classList.remove("bg-danger");
  }
}

function resetQuiz() {
    location.reload();
}