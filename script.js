'use strict';
 
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let highscore=0;
const displayMessage = function(message){
    document.querySelector('.message').textContent=message;
}

let secretNumber = Math.trunc(Math.random()*20)+1;

let score = document.querySelector('.score').textContent = 20;


document.querySelector('.again').addEventListener('click',
function(){
    secretNumber = Math.trunc(Math.random()*20)+1;

    score = 20;
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    // document.querySelector('.message').textContent='Start guessing...';
    displayMessage('Start guessing...')
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.pName').value = '';

    
})

document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    

    if(!guess){
        // document.querySelector('.message').textContent = 'No number!';
        displayMessage('No number!')
    } else if (guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        // document.querySelector('.message').textContent = "Correct Number";
        displayMessage("Correct Number")
        document.querySelector('.highscore').textContent=score;
        let naam=document.querySelector('.pName').value;
        document.querySelector('.pHighscore').textContent=naam;
        document.querySelector('body').style.backgroundColor='#60b347';

        document.querySelector('.number').style.width='30rem';
    } else if(guess!==secretNumber){
        if( score>1 ){
            // document.querySelector('.message').textContent = guess>secretNumber?'Too high':'Too low';
            displayMessage(guess>secretNumber?'Too high':'Too low')
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = 'You Lost the game!';
            displayMessage('You Lost the game!')
            document.querySelector('.score').textContent = 0;
        }
    }
    // else if(guess>secretNumber){
    //     if( score>1 ){
    //         document.querySelector('.message').textContent = "Too high";
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You Lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    // else if(guess<secretNumber){
    //     if( score > 1){
    //         document.querySelector('.message').textContent = "Too low";
    //         score--;
    //         document.querySelector('.score').textContent = score;
            
    //     } else {
    //         document.querySelector('.message').textContent = 'You Lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }

            
        
    // }  
})