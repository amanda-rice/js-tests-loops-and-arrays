// 1. Write a function that will iterate over an alphabetized string and return the 
// missing letter.If there isn't a missing letter, return "no missing letters".
//Example:
// input: 'qrsuv'
// output: 't'
// Example:
// input: 'cdefghi'
// output: 'no missing letters'
// Hint: Utilize the string prototype method charCodeAt and generic method fromCharCode

function letterChecker(str) {
  let lastValue = 0
  let missingValue = ''
  for (let i = 0; i < str.length; i++) {
    if (lastValue > 0) {
      if (lastValue + 1 != str.charCodeAt(i)) {
        missingValue = String.fromCharCode(lastValue + 1)
      }
    }
    lastValue = str.charCodeAt(i)
  }
  if (missingValue.length > 0) {
    return missingValue
  }
  else {
    return 'no missing letters'
  }

}


// ------------------------------------------


// 2. Given an array of numbers and a target number, determine if any two numbers in the 
// array can add up to the value of the target number.Return true or false
// Example:
// input: [2,4,6,3], 7
// output: true (because 4+3)

function sumEqualsTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return true;
      }
    }
  }
  return false;
  // arr.forEach(number => {
  //   let lookingFor = target - number
  //   console.log(lookingFor)
  //   if (arr.find(sumNumber => sumNumber == lookingFor)) {
  //     return true
  //   }
  // })
  // return false

}


// ------------------------------------------


// 3. Given an array of numbers, sort the array such that all even numbers don't change 
// their position but all odd numbers are sorted in ascending order.Return the sorted array.
// Example: 
// input:  [2, 9, 4, 3, 6, 6, 1, 5, 8]
// output: [2, 1, 4, 3, 6, 6, 5, 9, 8]

function oddAscender(arr) {
  let odds = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      odds.push(arr[i])
    }
  }

  let sortedOdds = odds.sort()
  console.log(sortedOdds)
  let oddIndex = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      arr.splice(i, 1, sortedOdds[oddIndex])
      oddIndex++
    }
  }
  console.log(arr)
  return arr

}