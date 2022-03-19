const gameData = [
    [0, 0, 0,],
    [0, 0, 0,],
    [0, 0, 0,],
];


let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;
//player array
const players = [
    {
        name: '',
        symbol:'X'
    },
    {
        name: '',
        symbol: 'O'
    },
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form'); //select first element form in the html
const errorOutputElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');

//const gameFieldElements = document.querySelectorAll('#game-board li'); //like CSS function
const gameBoardElement = document.getElementById('game-board');

//edit button
const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');

//start game button
const startNewGameBtnElement = document.getElementById('start-game-btn');

//cancel button
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');

//when click
editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig); //submit is built in event same as click

startNewGameBtnElement.addEventListener('click', startNewGame)

// for (const gameFieldElement of gameFieldElements) {
//     gameFieldElement.addEventListener('click', selectGameField);
// }

//alternative way
gameBoardElement.addEventListener('click', selectGameField);

