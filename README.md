# Rock-Paper-Scissors Game

A simple Rock-Paper-Scissors game created using HTML, CSS, and JavaScript.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Introduction
This project is a web-based implementation of the classic Rock-Paper-Scissors game. The player competes against the computer, and the first to reach the highest score wins.

## Features
- Simple, interactive user interface
- Score tracking for both player and computer
- Reset functionality to start a new game

## Installation
To run the game locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/rock-paper-scissors.git
    ```
2. Navigate to the project directory:
    ```bash
    cd rock-paper-scissors
    ```
3. Open `index.html` in your web browser to start playing.

## Usage
- Open the `index.html` file in a web browser.
- Click "Play!" to start the game.
- Select Rock, Paper, or Scissors by clicking on the corresponding image.
- The game will display the player's and computer's choices, and update the score based on the outcome.
- Click "Reset" to start a new game.

## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Make your changes and commit them: `git commit -m "Add new feature"`.
4. Push to the branch: `git push origin feature-branch`.
5. Submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [OpenAI](https://www.openai.com/) for providing assistance with the project.

## Files

### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Rock-Paper-Scissors</title>
</head>
<body>
    <h1>ROCK-PAPER-SCISSORS</h1>
    <div class="buttons">
        <button id="myButton">Play!</button>
    </div>
    <div class="wrapper">
       <div class="images">
            <img src="images/rock-hand.png" id="rockhand">
            <img src="images/paper-hand.png" id="paperhand">
            <img src="images/scissor-hand.png" id="scissorshand">
       </div>
        <pre id="outcome"></pre>
        <p id="h2text"></p>
        <pre id="myScore">
Player Score : 0
        </pre>
        <pre id="compScore">
Computer Score : 0
        </pre>
    </div>
    <script src="solution.js"></script>
</body>
</html>
```
### style.css
``` css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.975);
    color: white;
}
.buttons {
    width: 100px;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 10px;
}
button {
    font-size: 1.5em;
    width: 100px;
    border-radius: 40px;
    padding: 2px 4px;
    background-color: hsl(297, 100%, 67%);
    color: hsl(0, 0%, 100%);
    cursor: pointer;
    font-style: italic;
    font-weight: 600;
    margin-bottom: 10px;
}
button:hover {
    background-color: hsl(297, 100%, 57%);
}
.wrapper {
    position: relative;
    border: none;
    margin-top: 0px;
    display: flex;
    width: 900px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.658);
    color: black;
    border: none;
}
.wrapper::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    z-index: -1;
    padding: 5px;
    background-color: hsl(300, 100%, 25%);
}
.wrapper::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    z-index: -1;
    padding: 5px;
    box-shadow: 0px 0px 85px hsl(300, 100%, 25%);
}
h1 {
    position:  absolute;
    top: 10px;
}
.images {
    display: flex;
    gap: 30px;
    justify-content: space-evenly;
    margin-top: 20px;
}
img {
    cursor: pointer; 
}
img:hover {
    box-shadow: 12px 12px 12px hsl(0, 0%, 0%,0.3),-10px -10px 10px hsl(0, 0%, 100%);
}
#outcome {
    font-size: 3em;
    margin-top: 30px;
}
#h2text {
    font-size: 4em;
    cursor: default;
    margin-top: 20px;
}
#myScore {
    margin-top: 20px;
    font-size: 2.6em;
}
#compScore {
    font-size: 2.6em;
}

```
### solution.js
``` javas

const rockhand = document.getElementById("rockhand");
const paperhand = document.getElementById("paperhand");
const scissorshand = document.getElementById("scissorshand");
const myButton = document.getElementById("myButton");
const h2text = document.getElementById("h2text");
const compScore = document.getElementById("compScore");
const myScore = document.getElementById("myScore");
const outcome = document.getElementById("outcome");

const choices = ["rock","paper","scissors"];
let playerChoice;
let compChoice;
let pscore =0;
let cscore = 0;


myButton.addEventListener("click",function(){
    if( myButton.textContent === "Reset"){
        
        myScore.textContent = "Player Score : 0";
        outcome.textContent = " ";
        h2text.textContent = " ";
        compScore.textContent = "Computer Score : 0";
         pscore = 0;
        cscore = 0;
        
    }
    else{
        myButton.textContent = "Reset";
        playGame();
        
    }
});
function playGame(){

    rockhand.addEventListener("click",function(){
        playerChoice = 0;
        let randChoice = Math.floor(Math.random()*3);
        let compChoice = randChoice; 
        outcome.textContent = `Player : ${choices[playerChoice]}  Computer : ${choices[compChoice]}`;
        if(playerChoice === compChoice){
            h2text.textContent = "ITS A TIE!!";
            h2text.style.color = "black";

        }
        else if(compChoice === 2){
            h2text.textContent = "PLAYER WON!!";
            pscore++;
            myScore.textContent = `Player Score : ${pscore}`;
            h2text.style.color = "green";
        }
        else{
            h2text.textContent = "COMPUTER WON!!";
            cscore++;
            compScore.textContent = `Computer Score : ${cscore}`;
            h2text.style.color = "red";
        }
    });
    
    paperhand.addEventListener("click",function(){
        playerChoice = 1;
        let randChoice = Math.floor(Math.random()*3);
        let compChoice = randChoice; 
        outcome.textContent = `Player : ${choices[playerChoice]}  Computer : ${choices[compChoice]}`;

        if(playerChoice === compChoice){
            h2text.textContent = "ITS A TIE!!";
            h2text.style.color = "black";
        }
        else if(compChoice === 0){
            h2text.textContent = "PLAYER WON!!";
            h2text.style.color = "green";
            pscore++;
            myScore.textContent = `Player Score : ${pscore}`;

        }
        else{
            h2text.textContent = "COMPUTER WON!!";
            h2text.style.color = "red";
            cscore++;
            compScore.textContent = `Computer Score : ${cscore}`;

        }
    
    });
    
    scissorshand.addEventListener("click",function(){
        playerChoice = 2;
        let randChoice = Math.floor(Math.random()*3);
        let compChoice = randChoice; 
        outcome.textContent = `Player : ${choices[playerChoice]}  Computer : ${choices[compChoice]}`;

        if(playerChoice === compChoice){
            h2text.textContent = "ITS A TIE!!";
            h2text.style.color = "black";

        }
        else if(compChoice === 1){
            h2text.textContent = "PLAYER WON!!";
            h2text.style.color = "green";
            pscore++;
            myScore.textContent = `Player Score : ${pscore}`;

        }
        else{
            h2text.textContent = "COMPUTER WON!!";
            h2text.style.color = "red";
            cscore++;
            compScore.textContent = `Computer Score : ${cscore}`;

        }
    });
}











