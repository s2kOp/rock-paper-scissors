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











