function newGame() {
    startGame()
}
function startGame() {
    let maxNumber = document.getElementById('maxNumber').value
    let tries = document.getElementById('tries').value
    let hiddenNumber = Math.floor(Math.random() * maxNumber + 1)
    for (maxNumber; maxNumber != -1; maxNumber--) {
        for (tries = tries; tries != -1; tries--) {
            let yourNumber = +prompt(`Write your number, ${tries} left`)
            // let yourNumber = document.getElementById('inputRow').value;
            // let yourNumber = addEventListener('enter', function (checker) { document.getElementById('inputRow').value =`Write your number, ${tries} left`})
            // function checker() {
            if (yourNumber < hiddenNumber) {
                document.getElementById('result').innerHTML = `Try a bigger number, ${tries} left`
            } else if (yourNumber > hiddenNumber) {
                document.getElementById('result').innerHTML = `Try a smaller number, ${tries} left`
            }
            if (yourNumber === hiddenNumber) {
                document.getElementById('result').innerHTML = `CONGRATULATIONS YOU WIN! The hidden number was ${hiddenNumber}`
                break
            } else if (tries === 0) {
                document.getElementById('result').innerHTML = `You lose the number was ${hiddenNumber}`
                break
            }
        }
        break
    }
}
// }
