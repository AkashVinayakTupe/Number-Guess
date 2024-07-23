let input = document.getElementById(`input`);
let btn = document.getElementById("btn");
let wrng = document.querySelector(`.wrng`);
let guesses = document.getElementById("guesses");


let answer=Math.floor(Math.random()*100);
let numGuesses=0;

btn.addEventListener("click",()=>{
   guessesNumber()
})
function guessesNumber() {
    if (input.value<1 || input.value>100 ||isNaN(input.value)) {
        wrng.innerHTML="enter The number between 1 to100"
    }
    else{
        numGuesses ++;
        guesses.innerHTML="No of guess :"+numGuesses;
        if(input.value<answer){
            wrng.innerHTML="guess is too low"
        }
        else if(input.value>answer){
            wrng.innerHTML="guess is to high"
        }
        else{
            guesses.innerHTML=`Your Guess is correct in ${numGuesses} Attempts`;
            
            btn.disabled=true;
            setTimeout(() => {
                resetGame();
            }, 5000);
        }
    }
}
function resetGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    numGuesses = 0;
    guesses.textContent = "";
    wrng.textContent = "";
    btn.disabled = false;
}