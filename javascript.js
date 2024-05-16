console.log("Hello world :)");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rd = Math.floor(Math.random()*3) + 1;    
    let computer = 0; 
if (rd === 1) {
    computer = "scissor";
    console.log(computer);
} else if (rd === 2) {
    computer = "rock";
    console.log(computer);
} else {
    computer = "paper";
    console.log(computer);
}
return computer;
}

function getHumanChoice() {
    let humanChoice = prompt("Select between: paper,rock, and scissor");
    let human = humanChoice.toLowerCase();
    if (human === "rock") {
        console.log(human);
    } else if (human === "paper") {
        console.log(human);
    } else if (human === "scissor") {
        console.log(human);
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
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
        alert("Computer wins!!");
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
        alert("Computer wins!!");
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        alert ("Human wins!!");
    } else if (computerChoice === "scissor" && humanChoice === "rock") {
        alert("Human wins!!");
    } else if (computerChoice === "paper" && humanChoice === "scissor") {
        alert("Human wins!!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(computerSelection);
console.log(humanSelection);





















// console.log("Hello world :)");
// let humanScore = 0;
// let computerScore = 0;
// function getComputerChoice() {
//     let rd = Math.floor(Math.random()*3) + 1;     
// if (rd === 1) {
//     let computer = "scissor";
//     console.log(computer);
// } else if (rd === 2) {
//     let computer = "rock";
//     console.log(computer);
// } else {
//     let computer = "paper";
//     console.log(computer);
// }
// }
// getComputerChoice();

// function getHumanChoice() {
//     let humanChoice = prompt("Select between: paper,rock, and scissor");
//     let human = humanChoice.toLowerCase();
//     if (human === "rock") {
//         console.log(human);
//     } else if (human === "paper") {
//         console.log(human);
//     } else if (human === "scissor") {
//         console.log(human);
//     } else {
//         alert("Pease type a valid word");
//         getHumanChoice();
//     }

// }
// getHumanChoice();


