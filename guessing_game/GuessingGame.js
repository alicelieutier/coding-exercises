// DO NOT CHANGE THIS FILE !!
// Check the documentation to understand how to use it.

class Game {
  #target // make it private

  constructor(max=255) {
    if (max < 2) {
      throw new Error("Invalid value - Game needs to be initialised with a number higher than 1.")
    }

    this.#target = Math.floor(Math.random() * max) + 1
    
    this.maxGuesses = Math.ceil(Math.log2(max + 1))
    this.numberOfGuesses = 0

    this.status = 'started'

    console.log(`I chose a number between 1 and ${max}. You have ${this.maxGuesses} guesses to find it.`)
  }

  remainingGuesses() {
    return this.maxGuesses - this.numberOfGuesses
  }

  // DO NOT CHANGE THIS FILE !!
  guess(number) {
    if (this.remainingGuesses() <= 0) {
      console.log("No guesses remaining")
      return null
    }

    this.numberOfGuesses += 1

    console.log(`You guessed ${number}.`)

    if (number == this.#target) {
      console.log(`You win in ${this.#localisedGuess(this.numberOfGuesses)}!`)
      this.status = 'won'
      return 'won'
    }

    if (this.remainingGuesses() <= 0) {
      this.status = 'lost'
      console.log(`You lost. My number was ${this.#target}.`)
      return 'lost'
    }

    if (number < this.#target) {
      console.log(`My number is higher. ${this.#localisedGuess(this.remainingGuesses())} remaining.`)
      return "higher"
    }
    if (number > this.#target) {
      console.log(`My number is lower. ${this.#localisedGuess(this.remainingGuesses())} remaining.`)
      return "lower"
    }
  }

  #localisedGuess(number) {
    if (number == 1) return `1 guess`
    return `${number} guesses`
  }
}

// DO NOT CHANGE THIS FILE !!
module.exports = Game;