let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let resetbtn = document.querySelector("#reset-btn");

// computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};
// draw game
const drawGame = () => {

    msg.innerText = "Game was draw ! Play again.";
    msg.style.backgroundColor = "#081b31";
};
// show winner
const showWinner = (userwin, userChoice, compChoice) => {
    if (userwin === true) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
const resetGame = () => {
    userScorePara.innerText = "0";
    compScorePara.innerText = "0";
    msg.innerText = "Play your move !";
    // background-color: #081b31;
    msg.style.backgroundColor = "#081b31";
};
resetbtn.addEventListener("click", resetGame);
// main game
const playGame = (userChoice) => {

    const compChoice = genCompChoice();
    // Output will be "rock", "paper", or "scissors"

    if (userChoice === compChoice) {
        // Draw Game
        drawGame();
    }
    else {
        let userwin = true;
        if (userChoice === "rock") {
            // paper , scissors 
            if (compChoice === "paper") {
                userwin = false;
            } else {
                userwin = true;
            }
        } else if (userChoice === "paper") {
            // rock , scissor
            if (compChoice === "scissors") {
                userwin = false;
            } else {
                userwin = true;
            }
        } else {
            // user select scissor
            // rock , paper
            if (compChoice === "rock") {
                userwin = false;
            } else {
                userwin = true;
            }

        }

        showWinner(userwin, userChoice, compChoice);
        // resetbtn.addEventListener("click", resetGame);

    }

};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


