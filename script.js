function guessNumberGame() {
    // let maxNumber = parseInt(prompt(`Write the max number`))
    let maxNumber = document.getElementById('maxNumber').value;
    // let tries = parseInt(prompt(`Write the number of tries`))
    let tries = document.getElementById('tries').value;
    let hiddenNumber = Math.floor(Math.random() * maxNumber + 1)
    for (maxNumber; maxNumber != -1; maxNumber--) {
        for (tries = tries; tries != -1; tries--) {
            let yourNumber = parseInt(prompt(`Write your number, ${tries} left`))
            if (yourNumber < hiddenNumber) {
                alert(`Try a bigger number, ${tries} left`)
            } else if (yourNumber > hiddenNumber) {
                alert(`Try a smaller number, ${tries} left`)
            }
            if (yourNumber === hiddenNumber) {
                alert(`CONGRATULATIONS YOU WIN! \n The number was ${hiddenNumber}`)
                break
            } else if (tries === 0) {
                alert(`You lose the number was ${hiddenNumber}`)
                break
            }
        }
        break
    }
}
