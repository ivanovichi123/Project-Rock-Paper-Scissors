console.log("Good luck :)");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rd = Math.floor(Math.random()*3) + 1;    
    let computerChoice = 0; 
if (rd === 1) {
    computerChoice = "scissor";
} else if (rd === 2) {
    computerChoice = "rock";
} else {
    computerChoice = "paper";
}
return computerChoice;
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
    const score = document.querySelector("#score");
    score.textContent = "Human score: " + humanScore + "Computer score: " + computerScore;
    if (humanScore === 5){
        alert("The human wins!!");
    } else if (computerScore === 5){
        alert ("The computer wins!!!!");
    } else {
    }
}

// the buttons
const rock = document.querySelector("#rock");
rock.addEventListener ("click", () => {
    enemy = getComputerChoice();
    playRound("rock", enemy);
    console.log(enemy);
})

const paper = document.querySelector("#paper");
paper.addEventListener ("click", () => {
    enemy = getComputerChoice();
    playRound("paper", enemy);
    console.log(enemy);
})

const scissor = document.querySelector("#scissor");
scissor.addEventListener ("click", () => {
    enemy = getComputerChoice();
    playRound("scissor", enemy);
    console.log(enemy);

})
