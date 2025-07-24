let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msgContainer");
let uScoreVal = 0;
let cScoreVal = 0;

//User Choice
function getUserChoice(event) {
  const Uchoice = event.currentTarget.getAttribute("id");
  return Uchoice;
}
//Comp choice
const getCompChoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const index = Math.floor(Math.random() * 3);
  return options[index];
};
//draw game
const drawGame = () => {
  msg.innerHTML = "Draw Game, Play again";
  msg.style.backgroundColor = "#081b31";
};
//Show winner
const showWinner = (winvar, userChoice, compChoice) => {
  if (winvar) {
    msg.innerHTML = `You won! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    uScoreVal++;
    userScore.innerHTML = uScoreVal;
  } else {
    msg.innerHTML = `You lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    cScoreVal++;
    compScore.innerHTML = cScoreVal;
  }
};
//play game
const playGame = (event) => {
  const userChoice = getUserChoice(event);
  console.log("User choice is", userChoice);
  const compChoice = getCompChoice();
  console.log("Computer choice is", compChoice);
  let winvar = true;
  if (userChoice === compChoice) {
    drawGame();
    return;
  } else {
    if (userChoice === "Rock") {
      //paper scissor
      winvar = compChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      //rock scissors
      winvar = compChoice === "Rock" ? true : false;
    } else {
      //user....scissors
      // comp... rock paper
      winvar = compChoice === "Rock" ? false : true;
    }
  }
  showWinner(winvar, userChoice, compChoice);
};
choices.forEach((choice) => {
  choice.addEventListener("click", playGame);
});
