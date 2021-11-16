const body = document.body;
const choices = ['Sten', 'Sax', 'Påse'];
const btnSten = document.getElementById('Sten'); 
const btnSax = document.getElementById('Sax');
const btnPåse = document.getElementById('Påse');
let btnStart = document.getElementById('start-game');
let myInput = document.getElementById('input-box');
let changeName = document.getElementById('user-name');
let playerScoreText = document.getElementById('player-score');
let compScoreText = document.getElementById('computer-score');
let chosethis = document.getElementById("compChoice");
let numGenerator = Math.round(Math.random() * 2);


btnStart.addEventListener('click', function(){ 
    changeName.innerText = myInput.value;
    
});

let playerChoice = 0;
let compChoice = choices[numGenerator];

let playerScore = 0;
let compScore = 0;


btnSten.addEventListener('click', function () { //om player inputen är sten
    playerChoice = choices[0];
    numGenerator = Math.round(Math.random() * 2);
    compChoice = choices[numGenerator];
    if (compChoice === 'Påse') {
        compScore++;
        compScoreText.innerText = compScore;
        chosethis.innerText = "Datorn valde 🖐🏼, du förlorade rundan 😢"
    }
    else if (compChoice === 'Sax') {
        playerScore++;
        playerScoreText.innerText = playerScore;
        chosethis.innerText = "Datorn valde ✌🏼, du vann rundan!🥳"
    }
    else {
        chosethis.innerText = "Datorn valde ✊🏼, ingen får poäng."
    }
    if (playerScore === 3) {
        alert('Du vann!🥳');
        playerScore = 0;
        compScore = 0;
        compScoreText.innerText = 0;
        playerScoreText.innerText = 0;
    }

    if (compScore === 3) {
        alert('Du förlorade 😢');
        playerScore = 0;
        compScore = 0;
        compScoreText.innerText = 0;
        playerScoreText.innerText = 0;
    }
});

btnPåse.addEventListener('click', function () { //om player input är påse
    playerChoice = choices[1];
    numGenerator = Math.round(Math.random() * 2);
    compChoice = choices[numGenerator];
    if (compChoice === 'Sax') {
        compScore++;
        compScoreText.innerText = compScore;
        chosethis.innerText = "Datorn valde ✌🏼, du förlorade rundan 😢"
    }
    else if (compChoice === 'Sten') {
        playerScore++;
        playerScoreText.innerText = playerScore;
        chosethis.innerText = "Datorn valde ✊🏼, du vann rundan!🥳"
    }
    else {
        chosethis.innerText = "Datorn valde 🖐🏼, ingen får poäng."
    }

    if (playerScore === 3) {
        alert('Du vann!🥳');
        playerScore = 0;
        compScore = 0;
        compScoreText.innerText = 0;
        playerScoreText.innerText = 0;
    }

    if (compScore === 3) {
        alert('Du förlorade 😢');
        playerScore = 0;
        compScore = 0;
        compScoreText.innerText = 0;
        playerScoreText.innerText = 0;
    }
});

btnSax.addEventListener('click', function () { // om player input är sax

    playerChoice = choices[2];
    numGenerator = Math.round(Math.random() * 2);
    compChoice = choices[numGenerator];
    if (compChoice === 'Sten') {
        compScore++;
        compScoreText.innerText = compScore;
        chosethis.innerText = "Datorn valde ✊🏼, du förlorade rundan 😢"
    }
    else if (compChoice === 'Påse') {
        playerScore++;
        playerScoreText.innerText = playerScore;
        chosethis.innerText = "Datorn valde 🖐🏼, du vann rundan!🥳"
    }
    else {
        chosethis.innerText = "Datorn valde ✌🏼, ingen får poäng."
    }
    if (playerScore === 3) {
        alert('Du vann!🥳');
        playerScore = 0;
        compScore = 0;
        compScoreText.innerText = 0;
        playerScoreText.innerText = 0;
    }

    if (compScore === 3) {
        alert('Du förlorade 😢');
        playerScore = 0;
        compScore = 0;
        compScoreText.innerText = 0;
        playerScoreText.innerText = 0;
    }
});

