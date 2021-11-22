'use strict';

let scores,activePlayer,currentScore,playing

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
let diceE1 = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current0  = document.getElementById('current--0');
const current1  = document.getElementById('current--1');
const player0  = document.querySelector('.player--0');
const player1  = document.querySelector('.player--1');


 playing = true;
score0.textContent = 0;
score1.textContent = 0;
diceE1.classList.add('hidden');

scores = [0,0];
activePlayer = 0;


currentScore = 0;


const initialStage = () => {

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  diceE1.classList.add('hidden');

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');

  player0.classList.add('player--active');
  player1.classList.remove('player--active');
 
};
initialStage()


function switchPlayer(){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0 ;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}
switchPlayer();

btnRoll.addEventListener('click',function(){
    if(playing){

        //  Generating a random dice roll
        let dice = Math.trunc(Math.random() * 6) + 1 ;


        //  Display Dice
          diceE1.classList.remove('hidden');
          diceE1.src = `dice-${dice}.png`;
        

        //  Check for Roll
        if(dice !== 1){

          // add dice to current score
          currentScore += dice;
          document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        }else{

          // Switch to next player
          switchPlayer()
          
        }  

    }
})

btnHold.addEventListener('click',function(){
    if(playing){

      scores[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
      
      // Check if player's score >= 100
       if(scores[activePlayer] >= 20){
  
        //Finishing the game
          document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
          document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
          diceE1.classList.add('hidden');
          playing = false;
       }else {
  
        // switch to next player
        switchPlayer()
       }

    }
})

btnNew.addEventListener('click',initialStage)
