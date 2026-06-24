const rollButton =document.getElementById("rollButton");
const label1 = document.getElementById("label1");
const min = 1;
const max = 6;

let randomNum ;

rollButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum;
}
