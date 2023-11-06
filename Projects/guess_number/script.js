let randomNumber=(parseInt(Math.random()*100 +1));

const submit=document.querySelector("#submit");
const userInput=document.querySelector("#number");

const guessSlot=document.querySelector('.previousGuess');
const remaining=document.querySelector('.remaining');
const lowOrHigh=document.querySelector('.lowOrHigh');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess=[];
let numGuess=1;

let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        validateGuess(guess);
        
    })
}

function validateGuess(guess){
    //
    if(isNaN(guess)){
        alert(`please enter a valid number `);
    }else if(guess<1 || guess>100){
        alert(`number is between 1 to 100`);
    }else{
        prevGuess.push(guess);
        if(numGuess >= 11){
            displayGuess(guess);
            displayMessage(`Game Over.  Random NUmber is ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    }else if(guess<randomNumber){
        displayMessage(`Number is TOOO Low`);
    }else if(guess>randomNumber){
        displayMessage(`Number is TOOO High`);
    }
}
function displayGuess(guess){
    userInput.value='';
    guessSlot.innerHTML+=`${guess}, `;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`;
}
function displayMessage(message){
    lowOrHigh.innerHTML=`<h2>${message}</h2>`
}
function endGame(guess){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}
function newGame(guess){
    const newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber=(parseInt(Math.random()*100 +1));
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML=`${11-numGuess}`;
        userInput.removeAttribute('disabled','');
        startOver.removeChild(p);
        playGame=true;
        
    })
}