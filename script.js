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

// step 6

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
  
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  
    console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
  }
  
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

                playRound(humanSelection, computerSelection);

                // Play 5 rounds
            for (let i = 1; i <= 5; i++) {
                console.log(`\nRound ${i}`);
                const humanSelection = getHumanChoice();
                const computerSelection = getComputerChoice();
                playRound(humanSelection, computerSelection);
            }

            // Announce final result
            console.log("\nFINAL RESULT:");
            if (humanScore > computerScore) {
                console.log("🎉 You won the game!");
            } else if (computerScore > humanScore) {
                console.log("😢 The computer won the game!");
            } else {
                console.log("🤝 It's a tie overall!");
            }
            

            // Call the game to start it
            playGame();