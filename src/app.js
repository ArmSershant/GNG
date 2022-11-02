import { Game } from './Game.js'
const game = new Game()
document.getElementById('startBtn').onclick = function () {game.play()}
