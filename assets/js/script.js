const answer = document.getElementsByClassName("answer");

const titleQuestion = document.getElementById("titleQuestion");
const firstAnswer = document.getElementById("firstAnswer");
const secondAnswer = document.getElementById("secondAnswer");
const thirdAnswer = document.getElementById("thirdAnswer");
const fourAnswer = document.getElementById("fourAnswer");
const worldImage = document.getElementById("worldImage");
const countryFlag = document.getElementById("countryFlag");

const nextButton = document.getElementsByClassName("nextButton")[0];

const divQuestions = document.getElementById("questions");

let posOfQuestionOnScreen = 0;
let amountCorrectAnswer = 0;
let numberTotalQuestions = 5;

let finalQuestions = false;
let buttonsEnable = true;

const questionList = [
  {
    title: "Qual a Capital do Brasil?",
    answer1: "São Paulo",
    answer2: "Curitiba",
    answer3: "Brasília",
    answer4: "Rio de Janeiro",
    correctAnswer: "Brasília",
  },
  {
    title: "A Qual país pertence esta bandeira?",
    answer1: "Angola",
    answer2: "Reino Unido",
    answer3: "Estados Unidos",
    answer4: "Espanha",
    correctAnswer: "Estados Unidos",
    urlFlag:
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
  },
  {
    title: "Qual a Capital da Inglaterra?",
    answer1: "Londres",
    answer2: "Amsterdam",
    answer3: "Berlim",
    answer4: "Paris",
    correctAnswer: "Londres",
    urlFlag:
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_England.svg",
  },
  {
    title: "Qual destes país tem o maior número de habitantes?",
    answer1: "Russia",
    answer2: "Índia",
    answer3: "China",
    answer4: "Estados Unidos da América",
    correctAnswer: "China",
  },
  {
    title: "A Qual país pertence esta bandeira?",
    answer1: "Rússia",
    answer2: "Espanha",
    answer3: "Indonésia",
    answer4: "Brasil",
    correctAnswer: "Espanha",
    urlFlag:
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
  },
];
let CORRECT_ANSWER = questionList[posOfQuestionOnScreen].correctAnswer;

function setQuestion(posOfQuestion) {
  titleQuestion.innerHTML = questionList[posOfQuestion].title;
  if (!questionList[posOfQuestion].urlFlag) {
    countryFlag.style.display = "none";
  } else {
    countryFlag.src = questionList[posOfQuestion].urlFlag;
    countryFlag.style.display = "block";
  }
  firstAnswer.innerHTML = questionList[posOfQuestion].answer1;
  secondAnswer.innerHTML = questionList[posOfQuestion].answer2;
  fourAnswer.innerHTML = questionList[posOfQuestion].answer3;
  thirdAnswer.innerHTML = questionList[posOfQuestion].answer4;

  posOfQuestionOnScreen = posOfQuestion;
  CORRECT_ANSWER = questionList[posOfQuestionOnScreen].correctAnswer;
}
function showResults() {
  divQuestions.innerHTML = '<div class="questions">\n <img src="assets/img/undraw_winners_ao2o 2.d76bfdf87016eda38fd439d929ce0371.svg"> \n<p id="results">Results</p>\n<p>You got <span id="numCorrectAnswer">'+amountCorrectAnswer+'</span> correct answers</p>\n<a href="index.html"><button id="tryAgain">Try Again</button></a>';
  worldImage.src = "";
  numCorrectAnswer.innerHTML = amountCorrectAnswer;
}
function handleAnswerQuestion() {
  if (posOfQuestionOnScreen < 4) {
    posOfQuestionOnScreen++;
  } else if (posOfQuestionOnScreen === 4) showResults();
}

function see(event) {
  nextButton.style.display = "flex";
  if (buttonsEnable === true){
    console.log("TRUE");
    buttonsEnable = false;
    
    if (event.innerText === CORRECT_ANSWER) {
      handleAnswerQuestion();
      console.log("Resposta Certa! ");
      amountCorrectAnswer++;
      event.style.background = "#60BF88";
      event.style.color = "white";
      event.style.border = "none";
      return;
    } else {
      handleAnswerQuestion();
    
      for(let initialNumber=0; initialNumber < answer.length; initialNumber++){
          if (answer[initialNumber].innerText === CORRECT_ANSWER){
            console.log(answer[initialNumber]);
            answer[initialNumber].style.background = "#6FCF97";
            answer[initialNumber].style.color = "white";
            answer[initialNumber].style.border = "none";
          }
        }

      console.log("Resposta Incorreta!, ", CORRECT_ANSWER);
      event.style.background = "#EA8282";
      event.style.color = "white";
      event.style.border = "none";
    }
  }
  else return;
}

function clearStylesButtons(){
  for(let initialCount=0; initialCount < answer.length; initialCount++){
    answer[initialCount].style.background = "unset";
    answer[initialCount].style.color = "#5256A1";
    answer[initialCount].style.border = "1px solid #5256A1";
  }
}
function nextQuestion(){
  setQuestion(posOfQuestionOnScreen);
  clearStylesButtons();
  nextButton.style.display = "none";
  buttonsEnable = true;
}


