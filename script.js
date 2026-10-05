let againBtn=document.querySelector(".again")
let gueessNumber=document.querySelector(".number");
let guessValue=document.querySelector(".guess");
let checkBtn=document.querySelector(".check");
let msg=document.querySelector(".message");
let gameScore=document.querySelector(".score");
let highScore=document.querySelector(".highscore");
let score=20;
let randomNumber=Math.trunc(Math.random()*20)+1;
console.log(randomNumber);

//click event for check
checkBtn.addEventListener("click",()=>{
    //1.want input value
    let val=Number(guessValue.value);

//2.Check if input is empty
if(!val){
    //2.1 Show a message enter a value
 msg.textContent="Enter a value";   
}//2.1 Show a message enter a value
//3 If random value is same as guess value
else if(val===randomNumber){
    
//3.1 Change background color to greeen
document.body.style.backgroundColor="green";
//3.2 Instead of ? put random value
gueessNumber.textContent=randomNumber;
//3.3 In msg show correct number
msg.textContent="Correct Nmber !";
//3.4 Check score is greater than highScore or not
if(score>highScore.textContent){
    //3.4.1 update highscore value
    highScore.textContent=score;
}//4 If input value is less than random
else if(val<randomNumber){
    //4.1 Show message to low
     msg.textContent="too low";
     //4.2 Decrement score by 1
    score--;
    //4.3 update the DOM value of Score
    gameScore.textContent=score;
}//5 If input value is greater than random
}
else if(val>randomNumber){
    //5.1 Show message too high
    msg.textContent="too high!";
    //5.2 Decrement score by 1
    score--;
    //5.3 update the DOM value of score
    gameScore.textContent=score;
}
});


// Functionality for again button
againBtn.addEventListener("click", () => {
// 1. change background color to #222
document.body.style.backgroundColor = "#222";
// 2. change message to start guessing...
msg.textContent = "Start guessing...";
// 3. at the place of ? we have to put?
gueessNumber.textContent = "?";
// 4. update score to 20
score = 20;
// 5. update in dom also 
gameScore.textContent = score;
// 6. generate a random number again
randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
});


// // Generate random number
// let secretNumber = Math.trunc(Math.random() * 20) + 1;

// // Initial score
// let score = 20;

// // Functionality for Again button
// document.querySelector('.again').addEventListener('click', function () {

//     // 1. Change background color to #222
//     document.querySelector('body').style.backgroundColor = '#222';

//     // 2. Change message to "Start guessing..."
//     document.querySelector('.message').textContent = 'Start guessing...';

//     // 3. Change number back to ?
//     document.querySelector('.number').textContent = '?';

//     // 4. Update score to 20
//     score = 20;

//     // 5. Update score in DOM
//     document.querySelector('.score').textContent = score;

//     // 6. Generate a new random number
//     secretNumber = Math.trunc(Math.random() * 20) + 1;

//     // Optional: Clear the input box
//     document.querySelector('.guess').value = '';
// });







// let againBtn = document.querySelector(".again");
// let guessNumber = document.querySelector(".number");
// let guessvalue = document.querySelector(".guess");
// let checkbtn =  document.querySelector(".check");
// let msg = document.querySelector(".message");
// let gameScore = document.querySelector(".score");
// let highScore = document.querySelector(".highscore");
// let score = 20;
// let randomNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(randomNumber);

// // Click event for check
// checkbtn.addEventListener("click", () =>{
//    // 1. Want input value 
//    let val =Number(guessvalue.value);
// // 2. Check if input is empty 
// if(!val){
//     // 2.1 Show message enter a value
//     msg.textContent = "Enter a value !";
//     // 3. If random value is same as guess
// }else if (val === randomNumber){
//     // 3.1 change background color to green 
//     document.body.style.backgroundColor = "green";
//     // 3.2 Instead of ? put random value
//     guessNumber.textContent = randomNumber;
//     // 3.3 in msg show correct number 
//     msg.textContent = "Correct Number !";
//     // / 3.4 check score is greater than highscore or not
//     if (score > highScore.textContent){
//         // 3.4.1 update the dom value of score 
//         highScore.textContent = score;
//      }
//     } // 4. if input value is less than random
//     else if (val < randomNumber){
//         // 4.1 show msg too low
//         msg.textContent = "too Low";
//         // 4.2 Decrement score by 1
//         score--;
//         // 4.3 update the value is greater than random
//         gameScore.textContent = score;
//     }  // 5 if input value is greater than random
//     else if (val > randomNumber){
//         // 5.1 show msg too low 
//         msg.textContent = "too high!";
//         // 5.2 Decrement score by 1
//         score--;
//         // 5.3 update the dom value of score
//         gameScore.textContent = score;

//     }
// });










// 1. Want input value
// 2. Check if input is empty 
// 3. If random value is same as guess
// 3.1 change background color to green 
// 3.2 Instead of ? put random value
// 3.3 in msg show correct number 
// 3.4 check score is greater than highscore or not
// 3.4.1 update the dom value of score 
// 4. if input value is less than random
// 4.1 show msg too low
// 4.2 Decrement score by 1
// 4.3 update the value is greater than random
// 5 if input value is greater than random
// 5.1 show msg too low 
// 5.2 Decrement score by 1
// 5.3 update the dom value of score
9810991432
