let questions = [
  {
    id: 1,
    question: "1)Как называется первый советский пилотируемый космический корабль?",
    option1: "Союз-1",
    option2: "Восток",
    option3: "Меркурий",
    option4: "Восход",
    correct: "Союз-1"
  },
  {
    id: 2,
    question: "2) Когда космический корабль 'Союз-1' был запущен на орбиту?",
    option1: "13 августа 1965 года",
    option2: "3 мая 1963 года",
    option3: "23 апреля 1967 года",
    option4: "9 февраля 1961 года",
    correct: "23 апреля 1967 года"
  },
  {
    id: 3,
    question: "3) Кто находился на борту корабля 'Союз-1'?",
    option1: "В.В. Аксёнов",
    option2: "В.М. Комаров",
    option3: "Б.Д. Андреев",
    option4: "О.Г. Артемьев",
    correct: "В.М. Комаров"
  },
  {
    id: 4,
    question: "4) Стартовая площадка для запуска корабля 'Союз-1'?",
    option1: "Байконур",
    option2: "около Орска",
    option3: "Восточный",
    option4: "Семнан",
    correct: "Байконур"
  },
  {
    id: 5,
    question: "5) Длительность полёта корабля?",
    option1: "28 ч 21 мин 45 с",
    option2: "26 ч 47 мин 52 с",
    option3: "24 ч 33 мин 18 с",
    option4: "22 ч 30 мин 35 с",
    correct: "26 ч 47 мин 52 с"
  },
  {
    id: 6,
    question: "6) Масса коробля 'Союз-1'?",
    option1: "3,370т",
    option2: "4,160т",
    option3: "5,980т",
    option4: "6,450т",
    correct: "6,450т"
  },
  {
    id: 7,
    question: "7) Где начинается космическое пространство?",
    option1: "около 100-110 км над уровнем моря",
    option2: "около 110-120 км над уровнем моря",
    option3: "около 140-150 км над уровнем моря",
    option4: "около 60-50 км над уровнем моря",
    correct: "около 100-110 км над уровнем моря"
  },
  {
    id: 8,
    question: "8) Какая страна первой запустила спутник?",
    option1: "США",
    option2: "СССР",
    option3: "Китай",
    option4: "Великобритания",
    correct: "СССР"
  },
  {
    id: 9,
    question: "9) Как называется ближайшая к Солнцу планета? ",
    option1: "Юпитер",
    option2: "Венера",
    option3: "Земля",
    option4: "Меркурий",
    correct: "Меркурий"
  },
]
showTest(0);

function showTest(i) {
  let item =
    '<div class="questionBox">' +
    `<p id="question">${questions[i].question}</p>` +
    '</div>' +
    '<div class="options">' +
    `<div id="option1" onclick="check('${questions[i].option1}', '${questions[i].correct}', ${i}, 'option1')" class="option">${questions[i].option1}</div>` +
    `<div id="option2" onclick="check('${questions[i].option2}', '${questions[i].correct}', ${i}, 'option2')" class="option">${questions[i].option2}</div>` +
    `<div id="option3" onclick="check('${questions[i].option3}', '${questions[i].correct}', ${i}, 'option3')" class="option">${questions[i].option3}</div>` +
    `<div id="option4" onclick="check('${questions[i].option4}', '${questions[i].correct}', ${i}, 'option4')" class="option">${questions[i].option4}</div>` +
    `</div>`
  document.getElementById("content").innerHTML = item;
}

function check(option, correct, i, buttonID) {
  let button = document.getElementById(buttonID)
  if (option == correct) {
    button.style.backgroundColor = '#28a745';
    document.getElementById("images").src = `images/pic/${i + 1}.png`;
    if (i < 8) {
      showTest(i + 1);
    } else if (i == 8) {
      modal.style.display = "block";
    }
    console.log(i);
  } else {
    button.classList.add("error")
    setTimeout(function () {
      button.classList.remove('error');
    }, 300);

  }
}

var modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
