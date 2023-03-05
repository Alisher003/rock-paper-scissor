'user strick'

let elBox = document.querySelector(".box-btns");
let elPaperBtn = document.querySelector(".paper");
let elScissorsBtn = document.querySelector(".scissors");
let elRockBtn = document.querySelector(".rock");
let elPlayBtn = document.querySelector(".play-btn");
let elComputerResult = document.querySelector(".result-computer");
let elGameResult = document.querySelector(".game-result");
let elScore = document.querySelector(".navbar-btn__desc");

//Add class 
elPlayBtn.style.display = "none"
let img = document.createElement("img");
img.setAttribute("class", "choiseRock");
let score = 0;
elScore.textContent = score;




// Computer choice function+++
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
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
    if(getComputerChoice() == "rock" ) {
      // elGameResult.textContent = "YOU WIN";
      elScore.textContent = score += 1;
    }else if(getComputerChoice() == "scissors" ) {
      // elGameResult.textContent = "YOU LOSE";
      elScore.textContent = score -= 1;
    }else if(getComputerChoice() == "paper") {
      // elGameResult.textContent = "YOU DROW";
    }
    
    getComputerChoice();
    elScissorsBtn.style.display = "none";
    elRockBtn.style.display = "none";
  })
  
  elScissorsBtn.addEventListener("click", function(){
    elPlayBtn.style.display = "block";
    elPlayBtn.classList.add("btn-fixed")
    if(getComputerChoice() == "paper") {
      // elGameResult.textContent = "YOU WIN";
      elScore.textContent = score += 1;
    }else if(getComputerChoice() == "scissors") {
      // elGameResult.textContent = "YOU DROW";
    }else if(getComputerChoice() == "rock") {
      // elGameResult.textContent = "YOU LOSE";
      elScore.textContent = score -= 1;
    }
    getComputerChoice();

    elPaperBtn.style.display = "none";
    elRockBtn.style.display = "none";
  })
  
  elRockBtn.addEventListener("click", function(){
    elPlayBtn.style.display = "block";
    elPlayBtn.classList.add("btn-fixed")
    elRockBtn.classList.add("rock-fixed")
    elRockBtn.classList.add("rock-fixed")
    if(getComputerChoice() == "paper") {
      // elGameResult.textContent = "YOU LOSE";
      elScore.textContent = score -= 1;
    }else if(getComputerChoice() == "scissors") {
      // elGameResult.textContent = "YOU WIN";
      elScore.textContent = score += 1;
    }else if(getComputerChoice() == "rock") {
      // elGameResult.textContent = "YOU DROW";
    }
    
    getComputerChoice();
    elPaperBtn.style.display = "none";
    elScissorsBtn.style.display = "none";
  })





  // restart game
  elPlayBtn.addEventListener("click", function(){
    elPlayBtn.style.display = "none";
    elGameResult.style.display = "none";
    img.src = " ";
    elScissorsBtn.style.display = "inline-block";
    elRockBtn.style.display = "inline-block";
    elPaperBtn.style.display = "inline-block"
  })