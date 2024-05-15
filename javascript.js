console.log("Hello world :)");
let getComputerChoice = Math.floor(Math.random()*3) + 1;     
console.log(getComputerChoice);
if (getComputerChoice === 1) {
    let scissor = "scissor";
    console.log(scissor);
} else if (getComputerChoice === 2) {
    let rock = "rock";
    console.log(rock);
} else {
    let paper = "paper";
    console.log(paper);
}



