
let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");
let chances = 3;
let gameOver = false;
let history = [];
let final = document.getElementById("final");
let historyArea = document.getElementById("history-area")

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset );
userInput.addEventListener("focus" , function (){
    userInput.value = "";
})

function pickRandomNum () {
    computerNum = Math.floor(Math.random() * 100) +1;
    console.log("정답",computerNum);
    final.textContent = ` 정답 : ${computerNum}`;
}

function play() {
    let userValue = userInput.value;

    if(userValue < 1 || userValue > 100){
        resultArea.textContent = "1과 100사이 숫자를 입력해 주세요"
        return;
    }

    if(history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요"
        return;
    }
    

    chances--;
    chanceArea.textContent = `남은 기회: ${chances}번`
    if(userValue < computerNum){
        resultArea.textContent = "UP!!!"
       
    }else if(userValue > computerNum){
        
        resultArea.textContent = "Down~~"
    }else {
        
        resultArea.textContent = "맞추셨습니다~!"
        gameOver=true;
    } 

    history.push(userValue);
    historyArea.textContent = `지금까지 입력한 숫자는~? ${history}`

    if (chances < 1) {
        gameOver = true;
        chanceArea.textContent = "게임 오버!";
    }

    if(gameOver == true) {
        playButton.disabled = true;
    }
}  
 

function reset() {
    userInput.value = "";
    history = [];
     historyArea.textContent = `지금까지 입력한 숫자는~?`
    pickRandomNum();
    chances = 3;
    chanceArea.textContent = `남은 기회: ${chances}번`
    resultArea.textContent = "결과값이 여기 나옵니다!";
    gameOver = false;
    playButton.disabled = false;
}

pickRandomNum()