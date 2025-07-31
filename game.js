let playerScore = 0;
let compScore = 0;
const scoreBoard = document.querySelector(".scores");
const svg = document.querySelectorAll("img");
const buttons = document.querySelectorAll("button");
const result = document.querySelector(".results");
const resultText = document.createElement("p");
const roundWinner = document.createElement("p");
const player = document.createElement("p");
const computer = document.createElement("p");
const winner = document.createElement("p");
let restart = document.createElement("button");
result.appendChild(resultText);
result.appendChild(roundWinner);
scoreBoard.appendChild(player);
scoreBoard.appendChild(computer);
result.appendChild(winner);

player.textContent = `Your score: ${playerScore}`;
computer.textContent = `Computer's score: ${compScore}`;

const images = Array.from(svg);
const choice = Array.from(buttons);

restart.textContent = "Restart";
restart.addEventListener("click", () => {
    resultText.textContent = "";
    roundWinner.textContent = "";
    winner.textContent = "";
    playerScore = 0;
    compScore = 0;
    player.textContent = `Your score: ${playerScore}`;
    computer.textContent = `Computer's score: ${compScore}`;
    result.removeChild(restart);
});

images.forEach((img) => img.addEventListener("click", (e) => {
    let imageTitle = e.target.src;
    imageTitle = imageTitle.slice(imageTitle.lastIndexOf("/") + 1, imageTitle.length - 4);
    let compChoice = getComputerChoice();
    if (playerScore != 5 && compScore != 5)
    {
        resultText.textContent = `Your choice: ${imageTitle}, Computer's choice: ${compChoice}`;
        roundWinner.textContent = playRound(imageTitle, compChoice);
        player.textContent = `Your score: ${playerScore}`;
        computer.textContent = `Computer's score: ${compScore}`;
    }
    if (playerScore == 5 || compScore == 5)
    {
        declareWinner();
        result.appendChild(restart);
    }
}));

choice.forEach((x) => x.addEventListener("click", (e) => {
    let playerChoice = e.target.textContent.toLowerCase();
    let compChoice = getComputerChoice();
    if (playerScore != 5 && compScore != 5)
    {
        resultText.textContent = `Your choice: ${playerChoice}, Computer's choice: ${compChoice}`;
        roundWinner.textContent = playRound(playerChoice, compChoice);
        player.textContent = `Your score: ${playerScore}`;
        computer.textContent = `Computer's score: ${compScore}`;
    }
    if (playerScore == 5 || compScore == 5)
    {
        declareWinner();
        result.appendChild(restart);
    }
}));

function getComputerChoice()
{
    let num = Math.round(Math.random() * 3 + 1);
    num == 1 
    if (num == 1)
        return "rock";
    else if (num == 2)
        return "paper";
    else
        return "scissors";
}

function playRound(playerChoice, compChoice)
{
    if (playerChoice == compChoice)
        return `Tie. Both of you are ${compChoice}.`;
    else if (compChoice == "rock")
        if (playerChoice == "paper")
        {
            playerScore++;
            return "You win. Paper beats rock.";
        }
        else
        {
            compScore++;
            return "Computer wins. Rock beats scissors.";
        }
    else if (compChoice == "paper")
        if (playerChoice == "scissors")
        {
            playerScore++;
            return "You win. Scissors beats paper.";
        }
        else
        {
            compScore++;
            return "Computer wins. Paper beats rock.";
        }
    else
    {
        if (playerChoice == "rock") 
        {
            playerScore++;
            return "You win. Rock beats scissors.";
        }
        else
        {
            compScore++;
            return "Computer wins. Scissors beats paper.";
        }
    }
}

function declareWinner()
{
    if (playerScore > compScore)
        winner.textContent = "You Win!";
    else
        winner.textContent = "You lose, computer wins!"
}