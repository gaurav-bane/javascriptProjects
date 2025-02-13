'use strict';

const playerOneBackground = document.querySelector('.player--0');
const playerSecondBackground = document.querySelector('.player--1');


const rollDiceButton = document.querySelector('.btn.btn--roll');
const holdButton = document.querySelector('.btn.btn--hold');
const resetButton = document.querySelector('.btn.btn--new');

const diceEL = document.querySelector('.dice');
const rolldiceScore = document.querySelector('#current--0');
const playerOneScore = document.querySelector('#score--0');
const playerSecondScore = document.querySelector('#score--1'); 

let score, currectScore, activePlayer, playing;

const init = function(){
    playerOneScore.textContent = 0;
    playerSecondScore.textContent = 0;
    score = [0, 0];
    currectScore = 0;
    activePlayer = 0;
    playing = true;

    playerOneScore.textContent = 0;
    playerSecondScore.textContent = 0;
    rolldiceScore.textContent = 0

    diceEL.classList.remove('hidden');
    playerOneBackground.classList.remove('player--winner');
    playerSecondBackground.classList.remove('player--winner');
    playerOneScore.classList.remove('player--active');
   
    
};

init();

const switchPlayer = function(){
    latestCurrentScore(activePlayer).textContent = 0
    currectScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; 
    playerOneBackground.classList.toggle('player--active');
    playerSecondBackground.classList.toggle('player--active');
};

const latestCurrentScore = function(player){
    return document.getElementById(`current--${player}`);
};


diceEL.classList.add('hidden');
rollDiceButton.addEventListener('click',function(){
    if(playing){
    const diceRollNumber =  Math.trunc(Math.random() * 6) + 1;
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${diceRollNumber}.png`;
    if (diceRollNumber !== 1){
        currectScore +=diceRollNumber;
        latestCurrentScore(activePlayer).textContent = currectScore
    }else {
        switchPlayer();

    }   
} 
});


holdButton.addEventListener('click',function(){
    if (playing){
    score[activePlayer] += currectScore ;
    console.log(score[activePlayer])
    document.getElementById(`score--${activePlayer}`).textContent  = score[activePlayer];
    if (score[activePlayer] > 10){
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--active`).classList.remove('player--active');
        diceEL.classList.add('hidden');
    }else{
        switchPlayer();
    }
}
});

resetButton.addEventListener('click',function(){
   init();
});