console.log("Good luck :)");
let humanScore = 0;
let computerScore = 0;

playGame();

function getComputerChoice() {
    let rd = Math.floor(Math.random()*3) + 1;    
    let computer = 0; 
if (rd === 1) {
    computer = "scissor";
} else if (rd === 2) {
    computer = "rock";
} else {
    computer = "paper";
}
return computer;
}

function getHumanChoice() {
    let humanChoice = prompt("Select between: paper,rock, and scissor");
    let human = humanChoice.toLowerCase();
    if (human === "rock" || "paper" || "scissor") {
    } else {
        alert("Pease type a valid word");
        getHumanChoice();
    }
return human;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert("Its a tie!!");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        alert ("Computer wins!!");
        computerScore = computerScore + 1;
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
        alert("Computer wins!!");
        computerScore = computerScore + 1;
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
        alert("Computer wins!!");
        computerScore = computerScore + 1;
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        alert ("Human wins!!");
        humanScore = humanScore + 1;
    } else if (computerChoice === "scissor" && humanChoice === "rock") {
        alert("Human wins!!");
        humanScore = humanScore + 1;
    } else if (computerChoice === "paper" && humanChoice === "scissor") {
        alert("Human wins!!");
        humanScore = humanScore + 1;
    }
    console.log("Human score: " + humanScore, "\n");
    console.log("Computer score: " + computerScore);
}


function playGame() {
    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(computerSelection);
        console.log(humanSelection);
    }
    if (humanScore > computerScore) {
        alert("YOU WINS!!!");
    } else if (computerScore > humanScore) {
        alert("COMPUTER WINS!!!");
    } else {
        alert("Its a tie!!");
    }
}