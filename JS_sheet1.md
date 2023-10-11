# Exercise sheet 1

## Writing code

### Exercise 1:
Write a function that will greet people, but only if their name starts with "A"
```js
function greetPerson(name) {
	// your code here
}

greetPerson("Alice") // should print "Welcome Alice"
greetPerson("Astrid") // should print "Welcome Astrid"
greetPerson("Bob") // should print nothing!
greetPerson("Jane") // should print nothing!
```

### Exercise 2:
Write a function that will take an array of names, and will greet each person in the array
```js
function greetPeople(names) {
	// your code here
}

greetPeople(["Alice"]) // should print "Welcome Alice"
greetPeople(["Charlie", "Alice", "Bob"])
/* should print:

Welcome Charlie
Welcome Alice
Welcome Bob

*/

greetPeople([]) // should print nothing!
```

*Bonus:* What happens if you try calling `greetPeople("Jane")`. What do you think is happening there?

### Exercise 3:

Write a program that prints a multiplication table for numbers up to 12

For example, calling `multiplicationTable(6)` should print:
```
6 x 1 = 6
6 x 2 = 12
6 x 3 = 18
6 x 4 = 24
6 x 5 = 30
6 x 6 = 36
6 x 7 = 42
6 x 8 = 48
6 x 9 = 54
6 x 10 = 60
6 x 11 = 66
6 x 12 = 72
```

*Bonus:* Make the program throw an error if it's passed a number larger than 12 or lower than 1.

### Exercise 4:
Write a function that sums all the numbers from 0 to the maximum given.
This function should not be printing (using `console.log`), instead it should be returning a number.
```js
function sumNumbersToMax(max) {
	// your code here
}

// Here we are using console.log outside the function to print the returned number
console.log(sumNumbersToMax(1)) // should print 1
console.log(sumNumbersToMax(0)) // should print 0
console.log(sumNumbersToMax(3)) // should print 6 | 1 + 2 + 3 = 6
console.log(sumNumbersToMax(6)) // should print 21
console.log(sumNumbersToMax(-6)) // should print 0 | negative numbers should always return 0
```

## Reading code

### Exercise 1:

Look at this code. What do you think it is doing?
Study it line by line and try to predict the result before you run it.

```js
function capitalize(word) {
  let result = ''
  result += word[0].toUpperCase()
  result += word.slice(2).toLowerCase()
  return result
}

console.log(capitalize("alice"))
console.log(capitalize("ALICE"))
console.log(capitalize("chArLie"))
console.log(capitalize("Danielle"))
```

This code has a bug. Can you fix it by changing just one character?

### Exercise 2:

Look at this code. What do you think it is doing?
Study it line by line and try to predict what will be printed before you run it.

```js
function makeAcronym(sentence) {
  const words = sentence.split(' ')
  let result = ''
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i]
    result += currentWord[0].toUpperCase()
  }
  return result
}

console.log(makeAcronym("united states"))
console.log(makeAcronym("structured query language"))
console.log(makeAcronym("node package manager"))
console.log(makeAcronym("hyper text markup language"))
```

Can you change this code so that it doesn't take into account the word "of", so that it correctly returns "USA" if passed "united states of america"?

*Bonus:* Can you write a program that reuses both this function and the corrected one from exercise 1, and prints an explanation of the acronyms.
 
 If you call it with | It should print
 :--:|:--:
 `"node package manager"` | `NPM is Node Package Manager`
 `"united states of america"` | `USA is United States of America`
 `"hello"` | `H is Hello`
 
