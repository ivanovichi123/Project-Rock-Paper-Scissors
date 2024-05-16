console.log("Hello world :)");
function getComputerChoice() {
    let rd = Math.floor(Math.random()*3) + 1;     
if (rd === 1) {
    let computer = "scissor";
    console.log(computer);
} else if (rd === 2) {
    let computer = "rock";
    console.log(computer);
} else {
    let computer = "paper";
    console.log(computer);
}
}
getComputerChoice();

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

}
getHumanChoice();





