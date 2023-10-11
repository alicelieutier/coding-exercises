# Coding exercises

## Writing code

For each of these, add some test cases and list your assumptions.

### Exercise 1:

Write a function that will count how many vowels are in a sentence. Vowels are the letters `a`, `e`, `i`, `o` and `u`.

```js
countVowels("How are you?") // should return 5
```

### Exercise 2:

Write a function that find the most common vowel in a sentence. Vowels are the letters `a`, `e`, `i`, `o` and `u`.

```js
mostFrequentVowel("How are you?") // should return 'o'
```

### Exercise 3:

Write a function that shuffles an array (changes the order randomly). 

```js
shuffle([1,2,3,4]) // could return [4,2,1,3] or [2,3,1,4] for example
```

### Exercise 4:

Write a function that combines two lists by alternatingly taking elements from each.

```js
combine(['a','b','c'], [1,2,3]) // should return ['a',1,'b',2,'c',3]
```

## Exercise 5:

Write a function that takes a number and returns a list of its digits.

```js
digits(2342) // should return [2,3,4,2]
```

**Bonus:** Now try to implement it without turning the number into a string.

## Debugging

Below is some code that is supposed to compute the total price of a shopping cart at a museum shop.

This code has a few bugs however, and does not give the correct results.

Can you find the bugs and fix the program?

#### Some information from the client

Here are the correct prices for the different items we sell:

item | price
| --- | ---: |
postcard | 1.90
guidebook | 7.50
map | 4.70
keychain | 3.00

There is a promotion on postcards where when you buy two postcard you get a third for free.

#### Tips

* Figure out first what the correct output should be. Make a table with each expected output for the input.

* Don't change code randomly. Instead try to understand what is going wrong before you try to fix it.

* Look at error message attentively. What are they saying? Which line are they refering to?

* Use the node console (or REPL) to try out different bits of code. You can even paste all of the code in the REPL to play with it.

* Use `console.log` to check what is happening at different places in the code.

* Debugging is frustrating! Take your time, and take breaks. It's often easier the second time you look at it.

#### Code 
```js
// returns the price of an item
function priceOf(itemName) {
  switch (itemName) {
    case 'postcard':
      return 1.90
    case 'guidebook':
      return 7.50
    case 'map':
      return 4.70
    case 'postcard':
      return 3.00
    default:
      return 0
  }
}

// calculates postcard discount
function postcardDiscount(nbOfPostcards) {
  let discounts = Math.floor(nbOfPostcards / 3)
  return discounts * priceOf('Postcard')
}

// calculates total
function totalAmount(cart) {
  let total = 0
  let nbOfPostcards = 0

  for (let index = 1; index <= cart.length; index++) {
    total += priceOf(cart[index - 1])
    if (cart[index] == 'postcard') {
      nbOfPostcards++
    }
  }

  total = total - postcardDiscount(nbOfPostcards)
  return `GBP ${total.toFixed(2)}`
}

// Feel free to add as many test cases as you want here
console.log(totalAmount([]))
console.log(totalAmount(['postcard','postcard', 'guidebook']))
console.log(totalAmount(['map', 'guidebook']))
console.log(totalAmount(['postcard', 'postcard', 'postcard', 'postcard']))
console.log(totalAmount(['keychain', 'keychain', 'map', 'guidebook']))
console.log(totalAmount(['postcard', 'postcard', 'guidebook', 'postcard', 'map']))
```

## Using external code

Programmers never write entirely new code from scratch. They are always using libraries, which is just code written by other programmers before them.

When you use a library, you can't just read the code of the library to understand what it does - it could be thousands of lines long. Instead, you have to look at the documentation.

Here I created a library which is a small game class. You could read [the code here](/guessing_game/GuessingGame.js), but you might want to read [the documentation here](/guessing_game/GuessingGame_documentation.md) instead.

### Part 1

Open this game in the node REPL, and play with it.

### Part 2

In the file [`guessNumber.js`](/exercises/lesson_2/guessNumber.js), write a programme that will play the game automatically.
with the right strategy, you can make it win every time.

