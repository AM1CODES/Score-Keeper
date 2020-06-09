var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var resetbutton = document.getElementById("reset");
var updatescore = document.querySelector("p span");
var input = document.querySelector("input");
var forp1 = document.querySelector("#forp1");
var forp2 = document.querySelector("#forp2");
var p1score = 0;
var p2score = 0;
var gameover = false;
var winningscore = 5;

p1button.addEventListener("click",function(){
    if(!gameover){
        p1score++;
        if(p1score === winningscore){
            forp1.classList.add("winner");
            gameover = true;
        }
    }
    forp1.textContent = p1score;
});

p2button.addEventListener("click",function(){
    if(!gameover){
        p2score++;
        if(p2score === winningscore){
            forp2.classList.add("winner");
            gameover = true;
        }
    }
    forp2.textContent = p2score;
});

resetbutton.addEventListener("click",function(){
    reset();
});

function reset(){
    p1score = 0;
    p2score = 0;
    forp1.textContent = 0;
    forp2.textContent = 0;
    forp1.classList.remove("winner");
    forp2.classList.remove("winner");
    gameover = false;
}

input.addEventListener("change",function(){
    updatescore.textContent = input.value;
    winningscore = Number(input.value);
    if(input.value < 0){
        alert("Nobody chooses negative score Karen!Refresh the page and start again.");
    }
    reset();
});