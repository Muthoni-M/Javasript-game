function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.34) return "rock";
    else if (randomNumber < 0.67) return "paper";
    else return "scissors";
  }


  function getHumanChoice() {
    const userInput = prompt("Choose rock, paper, or scissors:");
    return userInput;
  }

const humanChoice = getHumanChoice();
console.log("You chose:", humanChoice); 

const computerChoice = getComputerChoice();
console.log("Computer chose:", computerChoice);


// players score

let playerScore = 0;
let computerScore = 0;