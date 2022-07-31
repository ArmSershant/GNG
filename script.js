function guessNumberGame() {
    // let maxNumber = parseInt(prompt(`Write the max number`))
    function check(){
    let maxNumber = document.getElementById('maxNumber').value;
    // let tries = parseInt(prompt(`Write the number of tries`))
    let tries = document.getElementById('tries').value;
    let hiddenNumber = Math.floor(Math.random() * maxNumber + 1)
    for (maxNumber; maxNumber != -1; maxNumber--) {
        for (tries = tries; tries != -1; tries--) {
            // let yourNumber = parseInt(prompt(`Write your number, ${tries} left`))
            let yourNumber = document.getElementById('inputRow').value;
            if (yourNumber < hiddenNumber) {
                document.getElementById('result').innerHTML = `Try a bigger number, ${tries} left`
            } else if (yourNumber > hiddenNumber) {
                document.getElementById('result').innerHTML = `Try a smaller number, ${tries} left`
            }
            if (yourNumber === hiddenNumber) {
                document.getElementById('result').innerHTML = `CONGRATULATIONS YOU WIN! \n    The number was ${hiddenNumber}`
                break
            } else if (tries === 0) {
                document.getElementById('result').innerHTML = `You lose the number was ${hiddenNumber}`
                break
            }
        }
        break
    }
    }
}
