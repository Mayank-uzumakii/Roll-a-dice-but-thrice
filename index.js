const myButton = document.getElementById('myButton');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const min = 1;
const max = 6;
myButton.onclick = function() {
let randomNumber1 = Math.floor(Math.random() * max) + min;
let randomNumber2 = Math.floor(Math.random() * max) + min;
let randomNumber3 = Math.floor(Math.random() * max) + min;
label1.textContent = randomNumber1;
label2.textContent = randomNumber2;
label3.textContent = randomNumber3;
}
