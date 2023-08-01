// Using strict
"use strict";

const qnBox = document.querySelector(".question-box");
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const scoreText = document.querySelector(".score");
const surahToNumber = document.querySelector(".s-n");
const numberToSurah = document.querySelector(".n-s");
const modal = document.querySelector(".modal");
const lostModel = document.querySelector(".lost-model");
const overlay = document.querySelector(".overlay");
const lostOverlay = document.querySelector(".lost-overlay");
const MainMenuBtn = document.querySelector(".try-Menu");
const chanceLeft = document.querySelector(".chanceleft");
const lostModelH1 = document.querySelector(".lost-modal-h1");
const lostModelScore = document.querySelector(".lost-score");
const tryAgain = document.querySelector(".try-again");
const highScoreEl = document.querySelector(".highscore");
const type = document.getElementById("type");
let surahToNumberClicked = false;
let numberToSurahClicked = false;
let score = 0;
let chance = 3 - 1;
let answer, qn;
let highScore = 0;

// Surah names
const surahNames = [
  "الفاتحة",
  "البقرة",
  "آل عمران",
  "النساء",
  "المائدة",
  "الأنعام",
  "الأعراف",
  "الأنفال",
  "التوبة",
  "يونس",
  "هود",
  "يوسف",
  "الرعد",
  "إبراهيم",
  "الحجر",
  "النحل",
  "الإسراء",
  "الكهف",
  "مريم",
  "طه",
  "الأنبياء",
  "الحج",
  "المؤمنون",
  "النور",
  "الفرقان",
  "الشعراء",
  "النمل",
  "القصص",
  "العنكبوت",
  "الروم",
  "لقمان",
  "السجدة",
  "الأحزاب",
  "سبأ",
  "فاطر",
  "يس",
  "الصافات",
  "ص",
  "الزمر",
  "غافر",
  "فصلت",
  "الشورى",
  "الزخرف",
  "الدخان",
  "الجاثية",
  "الأحقاف",
  "محمد",
  "الفتح",
  "الحجرات",
  "ق",
  "الذاريات",
  "الطور",
  "النجم",
  "القمر",
  "الرحمن",
  "الواقعة",
  "الحديد",
  "المجادلة",
  "الحشر",
  "الممتحنة",
  "الصف",
  "الجمعة",
  "المنافقون",
  "التغابن",
  "الطلاق",
  "التحريم",
  "الملك",
  "القلم",
  "الحاقة",
  "المعارج",
  "نوح",
  "الجن",
  "المزمل",
  "المدثر",
  "القيامة",
  "الإنسان",
  "المرسلات",
  "النبأ",
  "النازعات",
  "عبس",
  "التكوير",
  "الإنفطار",
  "المطففين",
  "الإنشقاق",
  "البروج",
  "الطارق",
  "الأعلى",
  "الغاشية",
  "الفجر",
  "البلد",
  "الشمس",
  "الليل",
  "الضحى",
  "الشرح",
  "التين",
  "العلق",
  "القدر",
  "البينة",
  "الزلزلة",
  "العاديات",
  "القارعة",
  "التكاثر",
  "العصر",
  "الهمزة",
  "الفيل",
  "قريش",
  "الماعون",
  "الكوثر",
  "الكافرون",
  "النصر",
  "المسد",
  "الإخلاص",
  "الفلق",
  "الناس",
];

const toggleModal = function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

const toggleLostModel = function () {
  lostModel.classList.toggle("hidden");
  lostOverlay.classList.toggle("hidden");
};

const wrongAnswer = function () {
  chanceLeft.textContent = 0;
  toggleLostModel();
  lostModelScore.textContent = `You got ${score} Streaks last game`;
  score = 0;
  scoreText.textContent = score;
};

// Display message
const displayMessege = function (message) {
  document.querySelector(".message").textContent = message;
};

// Initialization for surahToNumber
const initSurahToNumber = function () {
  answer = Math.trunc(Math.random() * 114) + 1;
  qn = surahNames[answer - 1];
  console.log(answer);
  qnBox.textContent = qn;
};

// Initialization for numberToSurah
const initNumberToSurah = function () {
  answer = Math.trunc(Math.random() * 114) + 1;
  qn = answer;
  console.log(surahNames[answer - 1]);
  qnBox.textContent = qn;
};

const checkEventHandler = function () {
  const guessvalue = Number(guess.value);
  chanceLeft.textContent = chance + 1;

  //when there is no input
  if (!guessvalue) {
    displayMessege("No Input");
    return; // Exit the function early to avoid further processing.
  }

  // When answer is correct
  if (guessvalue === answer) {
    guess.value = "";
    console.log("Correct");
    score++;
    scoreText.textContent = score;
    console.log(score);
    displayMessege("Correct Answer");
    initSurahToNumber();

    // When answer is wrong
  } else if (guessvalue !== answer) {
    guess.value = "";
    if (chance === 0) {
      if (score > highScore) {
        highScore = score;
        highScoreEl.textContent = highScore;
        lostModelH1.textContent = "Record!";
        wrongAnswer();
      } else {
        lostModelH1.textContent = "You Lost";
        wrongAnswer();
      }
    } else {
      chance--;
      chanceLeft.textContent = chance + 1;
      console.log(chance);
    }
    console.log("Wrong");
    displayMessege("Wrong Answer");
  }
};

surahToNumber.addEventListener("click", function () {
  toggleModal();
  surahToNumberClicked = true;
  console.log(`surahToNumberClicked ${surahToNumberClicked}`);
  initSurahToNumber();

  check.addEventListener("click", checkEventHandler);
});

numberToSurah.addEventListener("click", function () {
  type.type = "text";
  toggleModal();
  surahToNumberClicked = true;
  console.log(`numberToSurahClicked ${numberToSurahClicked}`);
  let chance = 3 - 1;
  chanceLeft.textContent = chance + 1;
  initNumberToSurah();
  check.addEventListener("click", function () {
    const guessNumber = guess.value;

    //when there is no input
    if (!guessNumber) {
      displayMessege("No Input");

      // When answer is correct
    } else if (guessNumber === surahNames[answer - 1]) {
      console.log("Correct");
      score++;
      scoreText.textContent = score;
      displayMessege("Correct Answer");
      initNumberToSurah();
      guess.value = "";

      // When answer is wrong
    } else if (guessNumber !== surahNames[answer - 1]) {
      guess.value = "";
      if (chance === 0) {
        if (score > highScore) {
          highScore = score;
          highScoreEl.textContent = highScore;
          lostModelH1.textContent = "Record!";
          wrongAnswer();
        } else {
          lostModelH1.textContent = "You Lost";
          wrongAnswer();
        }
      } else {
        chance--;
        chanceLeft.textContent = chance + 1;
        console.log(chance);
        guess.value = "";
      }
      console.log("Wrong");
      displayMessege("Wrong Answer");
    }
  });
});

MainMenuBtn.addEventListener("click", function () {
  location.reload();
});

tryAgain.addEventListener("click", function () {
  toggleLostModel();
  guess.value = " ";
  chance = 3 - 1;
  chanceLeft.textContent = chance + 1;
  displayMessege("Start guessing...");
  scoreText.textContent = 0;
});
