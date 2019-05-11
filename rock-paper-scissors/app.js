let userScore = 0;
let computerScore = 0;

/* Caching the dom */

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_span = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

/* Random choice for computer */

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

/* Win, Draw, Lose*/

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = user + " beats " + computer + ". You win!";
}

function lose(user, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = computer + " beats " + user + ". You lost!";
}

function draw(user, computer) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = computer + " equals " + user + ". It's a draw!";
}

/* Game magic happens here */
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function() {
    game("rock");
  });

  paper_div.addEventListener("click", function() {
    game("paper");
  });

  scissors_div.addEventListener("click", function() {
    game("scissors");
  });
}

main();
