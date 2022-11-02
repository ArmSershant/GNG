export class Game {
    play() {
        this.checker()
    }

    checker() {
        let tries = +prompt('Write tries count')
        let maxNumber = +prompt('Write a maximum guessing number')
        let hiddenNumber = Math.floor(Math.random() * maxNumber + 1)
        for (maxNumber; maxNumber != -1; maxNumber--) {
            for (tries = tries; tries != -1; tries--) {
                let yourNumber = +prompt(`Write your number, ${tries} left`)
                if (yourNumber < hiddenNumber) {
                    alert(`Try a bigger number`)
                } else if (yourNumber > hiddenNumber) {
                    alert(`Try a smaller number`)
                }
                if (yourNumber == hiddenNumber) {
                    alert(`CONGRATULATIONS YOU WIN! The hidden number was ${hiddenNumber}`)
                } else if (tries == 0) {
                    alert(`You lose the number was ${hiddenNumber}`)
                }
            }
        }
    }
}
