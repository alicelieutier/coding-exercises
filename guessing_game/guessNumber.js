// import the game from the GuessingGame.js file
// Look at that file for the documentation
const Game = require('./GuessingGame');

// Write your code to play this game here!
// These are just some example lines

g = new Game() // I chose a number between 1 and 255. You have 8 guesses to find it.
let result = g.guess(23) // You guessed 23. | Depending on the number chosen by the game, it will display different messages

// should you do something with the result?
// how should you pick your next guess?

console.log(g.status)
