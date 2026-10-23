const myButton = document.getElementById("myButton");
const label1 = document.getElementById("myLabel1");
const label2 = document.getElementById("myLabel2");
const label3 = document.getElementById("myLabel3");
const max = 6;
const min = 1;
let randomNum1;
let randomNum2;
let randomNum3;


myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random()*max) + min;
    randomNum2 = Math.floor(Math.random()*max) + min;
    randomNum3 = Math.floor(Math.random()*max) + min;
    label1.textContent = `1 got : ${randomNum1}`;
    label2.textContent = `2 got : ${randomNum2}`;
    label3.textContent = `3 got : ${randomNum3}`;
}