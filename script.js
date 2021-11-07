console.log('Welcome to Tic Tac Toe');
let music = new Audio("music.mp3");
let audioTurn = new Audio('ting.mp3');
let gameover = new Audio("gameover.mp3");

let turn = "X";
let isGameover = false;

// Function to change the turn 

const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}

// Function to check the win

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(i => {
        if((boxtext[i[0]].innerText ===  boxtext[i[1]].innerText) && (boxtext[i[2]].innerText === boxtext[i[1]].innerText) && (boxtext[i[0]].innerText !== ""))
        {
            document.querySelector('.info').innerText = boxtext[i[0]].innerText +  " Won "
            isGameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "80px";
        }
    })
}

// Game Logic
// music.play();
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
       if(boxText.innerText === ''){
           boxText.innerText = turn;
           turn = changeTurn();
           audioTurn.play();
           checkWin();
           if(!isGameover){
           document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;
           }
       } 
    }  )
})
// Add the reset button logic

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isGameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";

})

