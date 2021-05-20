let userScore = 0;
let computerScore = 0;

//these are DOM variables where they store the DOM elements from the HTML and the "span" is to help the programmer know where in the HTML
//this is caching the DOM so it can be stored for future use
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const results_p = document.querySelector(".results > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//getting a random number to play against
function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randoNum = Math.floor(Math.random() * 3);
    return choices[randoNum];
}

function convert(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(user, comp) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    results_p.innerHTML = convert(user) + " beats " + convert(comp) + ". You win!";

    //where we are connecting with the css and making new ones
    document.getElementById(user).classList.add("green-glow");
    setTimeout(function() {document.getElementById(user).classList.remove("green-glow")}, 500);
}
function lose(user, comp) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    results_p.innerHTML = convert(comp) + " beats " + convert(user) + ". You lost...";

    //where we are connecting with the css and making new ones
    document.getElementById(user).classList.add("red-glow");
    setTimeout(function() {document.getElementById(user).classList.remove("red-glow")}, 500);
}
function draw(user, comp) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    results_p.innerHTML = convert(user) + " equals " + convert(comp) + ". Its a draw!"; //innerHTML is to change the DOM on the page

    //where we are connecting with the css and making new ones
    document.getElementById(user).classList.add("gray-glow");
    setTimeout(function() {document.getElementById(user).classList.remove("gray-glow")}, 500);
}

function gameCheck(userChoice) {
    const computerChoice = getCompChoice();
    
    //using switch here works like a if statement but instead you switch the param, then use case to do the if statments with a break
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {

    //this is watching the event when the user clicks on the rock function on the project
    rock_div.addEventListener('click', function() {
        gameCheck("r");
    }) //watch for syntax, this is anonymously creating a function for you

    paper_div.addEventListener('click', function() {
        gameCheck("p");
    })

    scissors_div.addEventListener('click', function() {
        gameCheck("s");
    })

}
main();



