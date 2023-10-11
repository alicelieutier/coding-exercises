# Documentation for the GuessingGame library

## Code
You can find the code for this library in [this file](./GuessingGame.js).

## Purpose

This library allows you to play a number guessing game with the computer.

In this game, the computer will choose a random game between 1 and 255 (1 and 255 are included).

As a user, you will then have a maximum of 8 guesses to find the number that was chosen by the computer.

Every time you make a guess, the computer will tell you if the number they chose is higher or lower than the one you guessed, or if you found the right number!

If you have not guessed the number within 8 guesses, the game is lost.

## Playing from the node REPL

You can play directly from you terminal using the node REPL, by using this command (make sure to change the path to the path that makes sense for you):
```
node -i -e "$(< path/to/GuessingGame.js)"
```

## Import in your code file
If you want to use this library from a JS file, import it using this line at the top of your file:

```js
const Game = require('./GuessingGame'); // you might have to change the path depending on where the file is
```

## Usage

### Creating a new game

Create a new game by calling the Game class constructor:

```js
let game = new Game()
```
This initialise a game with a random chosen number between 1 and 255, inclusive.
It also initialises the maximum number of guesses to 8.

#### Note:
You can create a simpler or harder game by passing a number to the constructor, which will change the range of possible numbers.
It will also change the maximum number of attempts you will have to guess the number.

```js
let game = new Game(15) // this game will chose a number between 1 and 15, and you will have 4 tries to guess it.
```

### Making guesses

You can make a guess using the method `.guess(number)` on the game, like so:

```js
let result = game.guess(67)
```

This method will print some information about your guess, for example:

```
You guessed 67.
My number is higher. 7 guesses remaining.
```

This method also returns one of the following strings:
  * `won` - you found the number that was chosen. Well done!
  * `lost` - you used all your guesses and didn't find the number
  * `higher` - the chosen number is higher than your guess
  * `lower` - the chosen number is lower than your guess

### Checking the game's status

You can check the game's status by looking at the property `.status` on the `game` object, like so:
```js
console.log(game.status)
```

This property has three possible values:
  * `started` - the game has been initialised, and there is at least one guess remaining
  * `won` - the game has been won / the chosen number has been guessed
  * `lost` - the game has been lost / no guesses remain

### Checking the number of remaining guesses

You can check the number of attempts remaining to guess the chosen number by using the method `.remainingGuesses()` like so:

```js
console.log(game.remainingGuesses())
```

This method returns the number of attempts left.

## Full game demo in the node REPL

![gif REPL demo](/images/render1697044201883-min.gif)

#### Demo text:

```
alice$ node -i -e "$(< exercises/guessing_game/GuessingGame.js)"

Welcome to Node.js v18.0.0-rc.3.
Type ".help" for more information.

> const game = new Game(25)
I chose a number between 1 and 25. You have 5 guesses to find it.
undefined

> game.guess(12)

You guessed 12.
My number is lower. 4 guesses remaining.
'lower'

> game.guess(5)

You guessed 5.
My number is higher. 3 guesses remaining.
'higher'

> game.guess(9)

You guessed 9.
You win in 3 guesses!
'won'
```

