console.log("Hello world :)");
let result = 0;
function getComputerChoice() {
    let rd = Math.floor(Math.random()*3) + 1;     
if (rd === 1) {
    let result = "scissor";
    console.log(result);
} else if (rd === 2) {
    let result = "rock";
    console.log(result);
} else {
    let result = "paper";
    console.log(result);
}
}
getComputerChoice();







