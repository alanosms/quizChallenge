const question = document.getElementsByClassName("questions")[0].childNodes;

const titleQuestion = document.getElementById("titleQuestion");
const firstAnswer = document.getElementById("firstAnswer");
const secondAnswer = document.getElementById("secondAnswer");
const thirdAnswer = document.getElementById("thirdAnswer");
const fourAnswer = document.getElementById("fourAnswer");

const countryFlag = document.getElementById("countryFlag");

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
      correctAnswer: "Espanha",
      urlFlag:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
    },
    {
      title: "Qual a Capital da Inglaterra?",
      answer1: "Londres",
      answer2: "Amsterdam",
      answer3: "Berlim",
      answer4: "Paris",
      correctAnswer: "Londres",
      urlFlag: "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_England.svg"
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
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"
    },
];

function setQuestion(posOfQuestion){
    titleQuestion.innerHTML = questionList[posOfQuestion].title;
    if (!questionList[posOfQuestion].urlFlag){
        countryFlag.style.display = 'none';
    }
    else{
        countryFlag.src = questionList[posOfQuestion].urlFlag;
        countryFlag.style.display = 'block';
    }
  firstAnswer.innerHTML = questionList[posOfQuestion].answer1;
  secondAnswer.innerHTML = questionList[posOfQuestion].answer2;
  fourAnswer.innerHTML = questionList[posOfQuestion].answer3;
  thirdAnswer.innerHTML = questionList[posOfQuestion].answer4;

}

  const answer = document.getElementsByClassName("answer");

  function see(event){
    console.log(event.innerText);
  }

