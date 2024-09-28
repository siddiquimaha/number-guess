
document.querySelector(".sub-btn").addEventListener("click", initializeGame);
//
document.querySelector(".sub-btn").addEventListener("click", () => {
    let userGuess = parseInt(document.getElementById("userInput").value), 
        msgBox = document.querySelector(".msg-para"), 
        attempts = ++document.attempts || 1, 
        answer = 50;

    msgBox.innerText = userGuess < 1 || userGuess > 100 ? "Please input a valid number"
                     : userGuess < answer ? "Too low"
                     : userGuess > answer ? "Too high"
                     : `Congratulations! You guessed the right number ${answer} in ${attempts} attempts.`;

    document.attempts = attempts;
});