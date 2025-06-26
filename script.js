const button = document.getElementById("generate_btn");
const randomnum = document.getElementById("random_num");

const button1 = document.getElementById("num1");
const button2 = document.getElementById("num2");
const button3 = document.getElementById("num3");
const button4 = document.getElementById("num4");
const button5 = document.getElementById("num5");
const button6 = document.getElementById("num6");
const button7 = document.getElementById("num7");
const button8 = document.getElementById("num8");
const button9 = document.getElementById("num9");
const button10 = document.getElementById("num10");

let input;
const usernum = document.getElementById("users_num");

button1.onclick = function() {
    input = 1;
    usernum.textContent = input;
}
button2.onclick = function() {
    input = 2;
    usernum.textContent = input;
}
button3.onclick = function() {
    input = 3;
    usernum.textContent = input;
}
button4.onclick = function() {
    input = 4;
    usernum.textContent = input;
}
button5.onclick = function() {
    input = 5;
    usernum.textContent = input;
}
button6.onclick = function() {
    input = 6;
    usernum.textContent = input;
}
button7.onclick = function() {
    input = 7;
    usernum.textContent = input;
}
button8.onclick = function() {
    input = 8;
    usernum.textContent = input;
}
button9.onclick = function() {
    input = 9;
    usernum.textContent = input;
}
button10.onclick = function() {
    input = 10;
    usernum.textContent = input;
}


button.onclick = function() {
    randomnum.textContent = Math.floor(Math.random() * 10) + 1;
}


