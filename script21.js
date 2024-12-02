let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const getCompChoice = () => {
    const options = ["stone", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again!";
    msg.style.backgroundColor = "orange";
};

const showWinner = (userWin, compChoice, userChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win");
        msg.innerText = `You win!. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose!. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = getCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = false;
        if (userChoice === "stone") {
            userWin = compChoice === "scissor";
        } else if (userChoice === "paper") {
            userWin = compChoice === "stone";
        } else if (userChoice === "scissor") {
            userWin = compChoice === "paper";
        }
        showWinner(userWin, compChoice, userChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
