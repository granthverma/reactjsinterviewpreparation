// /**
//  *   1--> vaild guess value check karge  validate  kar ga ki value 1 se 100 tk hai ya  nahi  aur value ha ya nhai 
//  *    
//  *   2--> check guess  message print  random  = random you win low hai toh low hight hai high bolo 
//  *   3 -->  display guess value ko clean karga n array  , jitne remaing chanage us updated karga 
//  *       
//       4-->  guss pass meassge only print message 
//       5--> new game  - new game start kar diya 
//       6 --> end game


//       you are avabaile ho ya nahi 
//  *  
//  */

// let randomNumber = parseInt(Math.random() *100+1);
// const submit = document.querySelector(`#subt`);
// //  sumbit the value 
// const userInput =document.querySelector(`#guessField`);
// //guess th e flied 
// const guessSlot = document.querySelector(`.guesses`);
// // guesses value 
// const remaining = document.querySelector(`.lastResult`);
// // result
// const lowOrHi =document.querySelector(`.lowOrHi`);
// // value high or low 
// const startOver = document.querySelector(`.resultParas`);

// // result value


// const p = document.createElement(`p`);

// let prevGuess = [];
// let numGuess = 1 ;

// let playGame = true ;

// if (playGame) {
//     submit.addEventListener(`click`, function (e) {
//         e.preventDefault();
//         const guess = parseInt(userInput.value)
//         console.log(guess);
//         validateGuess(guess)
        
//     });
// }

// function validateGuess(guess) {
//     if (isNaN (guess)) { 
//         alert(`Please enter a vaild number`);
// }else if (guess < 1) {
//     alert(`PLease enter a number more than 1`);
// } else if (guess > 100) {
//     alert (`Please enter a number less than 100`);
// }else {
//     prevGuess.push(guess)

//     if(numGuess === 11){
//         displayGuess(guess);
//         displayMessage (`Game Over . Random number was ${randomNumber}`)
//         endGame();
//     }else {
//         displayGuess(guess)
//         checkGuess(guess)
//     }

// }
    
// }

// function checkGuess(guess) {
//     if (guess === randomNumber) {
//       displayMessage(`You guessed it right`);
//       endGame();
//     } else if (guess < randomNumber) {
//       displayMessage(`Number is TOOO low`);
//     } else if (guess > randomNumber) {
//       displayMessage(`Number is TOOO High`);
//     }
//   }

// function displayGuess(guess) {
//     userInput.value= '';
//     guessSlot.innerHTML += `${guess}, `;
//     newGuess++;
//     remaining.innerHTML =`${11-newGuess}`;
    
// }

// function displayMessage(message) {
//     lowOrHi.innerHTML = `<h2>${message}</h2>`;
//   }
// function endGame() {
//     userInput.value = '' ;
//     userInput.setAttribute( 'disabled','');
//     p.classList.add('button');
//     p.innerHTML = `<h2 id ="newGame">Start new Game </h2>` ;
//     startOver.appendChild(p);
//     playGame=  false ;
//     newGame() ;
// }

// function newGame() {
//     const newGameButton = document.querySelector(`#newGame`);
//     newGameButton.addEventListener( 'click', function (e) {
//         randomNumber = parseInt(Math.random()*100 +1);
//         prevGuess =[];
//         newGuess= 1;
//         guessSlot.innerHTML='';
//         remaining.innerHTML=`${11-newGuess}`;
//         userInput.removeAttribute('disabled');
//         startOver.removeChild(p);

//         playGame =true;

        
//     });
    
// }





let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

