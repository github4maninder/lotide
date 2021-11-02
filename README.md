# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @npm4maninder/lotide`

**Require it:**

`const _ = require('@npm4maninder/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(..)`: Gets the first element of array.
* `tail(..)`: Gets all but the first element of array.
* `middle(..)`: Implement middle which will take in an array and return the middle-most element(s) of the given array.
* `assertArraysEqual(..)`: Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
* `assertEqual(..)` : If the values match, it should print (console.log) the following: Assertion Passed: [actual] === [expected] (but with the values filled in) Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in).
* `assertObjectsEqual(..)`
* `countLetters(..)`: The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence. 
* `countOnly(..)`: This function should take in a collection of items and return counts for a specific subset of those items.
* `eqArrays(..)`: Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
* `eqObject(..)`
* `findKey(..)`
* `findKeyByValue(..)`: takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `letterPositions(..)`: function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.
* `map(..)`: Returns the first letter of each element in an array of strings.
* `takeUntil(..)`:Takes an array and a callback function. Returns a new array of items occuring until the point specified by the callback functions.
* `without(..)`: Implement without which will return a subset of a given array, removing unwanted elements.