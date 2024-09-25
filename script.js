'use strict';


// console.log( document.querySelector('.message' ).textContent );
// document.querySelector('.message').textContent = 'Angka benar!';
// console.log( document.querySelector('.message' ).textContent );

// console.log(document.querySelector('.number').textContent);
// document.querySelector('.number').textContent = 13;
// console.log(document.querySelector('.number').textContent);

// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);

// console.log(document.querySelector('.score').textContent=10);

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = "Tolong masukkan angka!";
    }else if (guess === secretNumber){
        document.querySelector('.message').textContent = "Angka benar!";
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }else if (guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = "Angka terlalu tinggi!";
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "Permainan habis!";
            document.querySelector('.score').textContent = 0;
        }

       
      
    }else if (guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = "Angka terlalu rendah";
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "Permainan habis!";
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent = 'Mulai Menebak';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});