'user strick'

const choices = ['rock', 'paper', 'scissors'];
let randomIndex = ''
let elBox = document.querySelector(".box-btns");
let elPaperBtn = document.querySelector(".paper");
let elScissorsBtn = document.querySelector(".scissors");
let elRockBtn = document.querySelector(".rock");
let elPlayBtn = document.querySelector(".play-btn");
let elRules = document.querySelector(".rules");
let elRulesBtn = document.querySelector(".rulesbtn")
let elGameResult = document.querySelector(".game-result");
let elScore = document.querySelector(".navbar-btn__desc");
var userValue = '';

elRules

//Add class 
elPlayBtn.style.display = "none"
let img = document.createElement("img");
img.setAttribute("class", "choiseRock");
let score = 0;
elScore.textContent = score;




// Computer choice function+++
function getComputerChoice() {
  randomIndex = Math.floor(Math.random() * 3);
  if(choices[randomIndex] == "rock") {
    img.src = "img/rock.png";
    elBox.appendChild(img);
  }else if(choices[randomIndex] == "paper") { 
    img.src = "img/paper.png";
    elBox.appendChild(img);
  }else if(choices[randomIndex] == "scissors") {
    img.src = "img/scissors.png";
    elBox.appendChild(img);
  } 
  return choices[randomIndex];
} 




// UserChoise
  elPaperBtn.addEventListener("click",  function(){
    elPlayBtn.style.display = "block";
    elPlayBtn.classList.add("btn-fixed")
    userValue = document.getElementById('paper').value
    getComputerChoice();
    elScissorsBtn.style.display = "none";
    elRockBtn.style.display = "none";
    winner();
  })
  
  elScissorsBtn.addEventListener("click", function(){
    elPlayBtn.style.display = "block";
    elPlayBtn.classList.add("btn-fixed")
    userValue = document.getElementById('scissors').value
    getComputerChoice();
    elPaperBtn.style.display = "none";
    elRockBtn.style.display = "none";
    winner();
  })
  
  elRockBtn.addEventListener("click", function(){
    elPlayBtn.style.display = "block";
    elPlayBtn.classList.add("btn-fixed")
    elRockBtn.classList.add("rock-fixed")
    getComputerChoice();
    elPaperBtn.style.display = "none";
    elScissorsBtn.style.display = "none";
    userValue = document.getElementById('rock').value
    winner();
    })



  function winner(getcomputerChoice) {
    if (userValue == choices[randomIndex]) {
      elGameResult.textContent = "Drow";
    } else if (userValue == 'paper' && choices[randomIndex] == 'scissors') {
      elGameResult.textContent = "You Lose";
      elScore.textContent = score -= 1;
    } else if (userValue == 'paper' && choices[randomIndex] == 'rock') {
      elGameResult.textContent = "You Win";
      elScore.textContent = score += 3;
    } else if (userValue == 'scissors' && choices[randomIndex] == 'paper') {
      elGameResult.textContent = "You Win";
      elScore.textContent = score += 3;
    } else if (userValue == 'scissors' && choices[randomIndex] == 'rock') {
      elGameResult.textContent = "You Lose";
      elScore.textContent = score -= 1;
    } else if (userValue == 'rock' && choices[randomIndex] == 'paper') {
      elGameResult.textContent = "You Lose";
      elScore.textContent = score -= 1;
    } else if (userValue == 'rock' && choices[randomIndex] == 'scissors') {
      elGameResult.textContent = "You Win";
      elScore.textContent = score += 3;
    }
  }



  // restart game
  elPlayBtn.addEventListener("click", function(){
    elPlayBtn.style.display = "none";
    elGameResult.textContent = "";
    img.src = " ";
    elScissorsBtn.style.display = "inline-block";
    elRockBtn.style.display = "inline-block";
    elPaperBtn.style.display = "inline-block";
  })