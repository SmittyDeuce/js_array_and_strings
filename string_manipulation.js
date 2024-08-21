/* Objective: The aim of this assignment is to acquaint students with
various string manipulation techniques in JavaScript, including string
length, case conversion, substring extraction, and string splitting.
Problem Statement: You are tasked with creating a JavaScript program
that demonstrates different string manipulation operations. The program
should cover obtaining the length of a string, converting cases 
(upper and lower), extracting substrings, and splitting strings 
based on a delimiter.

Task 1: Obtaining String Length - Create a string with some text content.
- Use the `length` property to obtain the length of the string.
Expected Outcome: Students should be able to understand how to 
determine the length of a string in JavaScript.

*/
let message = "Hello, World!";

const strLength = (str) => {
    console.log(str.length)
}

strLength(message)

/*
Task 2: Converting Cases - Create a string with mixed-case content.
- Use the `toUpperCase` method to convert the string to uppercase.
- Use the `toLowerCase` method to convert the string to lowercase.
Expected Outcome: Students should be able to demonstrate the ability
 to convert strings between uppercase and lowercase in JavaScript.
*/

let text = "Hello, World!";

function mixedCase(str){
    console.log("UPPERCASE:", str.toUpperCase())
    console.log("lowercase:", str.toLowerCase())
}

mixedCase(text)


/*
Expected Outcome: Students should be able to demonstrate the ability
to convert strings between uppercase and lowercase in JavaScript.
Task 3: Extracting Substrings - Create a string with some text content.
- Use the `substring` method to extract a substring from the original string.
Expected Outcome: Students should be able to extract substrings from a given
string using the `substring` method in JavaScript.
*/

let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.substring(0,8))


/*
Task 4: Splitting Strings - Create a string containing multiple words
separated by spaces.
- Use the `split` method to split the string into
an array of words based on the space delimiter.
Expected Outcome: Students should be able to split a string into an
array of substrings using the `split` method in JavaScript. Upon 
completion of this assignment, students should be proficient in
various string manipulation techniques in JavaScript, including
obtaining string length, converting cases, extracting substrings,
and splitting strings. They should also understand when and how to
apply these techniques in practical programming scenarios.
*/


function splitSubString(str) {
    let sub = sentence.substring(4,13)
    let splitArr = sub.split(" ")
    console.log(splitArr)
}

splitSubString(sentence)