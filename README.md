# js_array_and_strings

## Array Manipulation

This project demonstrates various array manipulation techniques in JavaScript, covering tasks such as adding and removing elements, sorting arrays, and applying advanced array methods like `map`, `filter`, and `reduce`. Each task is designed to practice and illustrate different aspects of array manipulation.

### Task 1: Adding and Removing Elements

### Objective
Manipulate an array by adding and removing elements.

### Steps
1. **Create an Array**: Start by creating an array with some initial elements.
2. **Add an Element**: Use the `push` method to add a new element to the end of the array.
3. **Remove the Last Element**: Use the `pop` method to remove the last element from the array.

### Example
Consider an array called `fruits`:
- Initial array: `['apple', 'banana', 'orange']`
- After using `push`: `['apple', 'banana', 'orange', 'grape']`
- After using `pop`: `['apple', 'banana', 'orange']`

This task demonstrates how to dynamically manipulate the length and contents of an array.

## Task 2: Sorting Arrays

### Objective
Sort an array of numbers in ascending order.

### Steps
1. **Create an Array**: Begin with an array of numbers in random order.
2. **Sort the Array**: Use the `sort` method to arrange the elements in ascending order.

### Example
For an array `numbers`:
- Initial array: `[3, 1, 5, 2, 4]`
- After sorting: `[1, 2, 3, 4, 5]`

Sorting is a fundamental operation, especially in algorithms that rely on ordered data.

## Task 3: Applying Array Methods

### Objective
Apply various array methods to process and manipulate an array of numbers.

### Steps
1. **Create an Array**: Start with an array of numbers.
2. **Double Each Number**: Use the `map` method to create a new array where each number is doubled.
3. **Filter Out Even Numbers**: Apply the `filter` method to remove even numbers from the array.
4. **Calculate the Sum**: Use the `reduce` method to calculate the sum of all numbers in the resulting array.

### Example
Given an array `numbers`:
- Initial array: `[1, 2, 3, 4, 5]`
- After using `map`: `[2, 4, 6, 8, 10]`
- After using `filter`: `[]` (all elements are even, so the array is empty)
- If there were odd numbers, `reduce` would sum them up.

### Important Note
If all numbers become even after doubling, the filtered array will be empty, resulting in a sum of `0` or a message indicating that no elements remain after filtering.

---

## Conclusion

This project serves as a hands-on introduction to essential array manipulation techniques in JavaScript. By practicing these tasks, you will become more comfortable with methods like `push`, `pop`, `sort`, `map`, `filter`, and `reduce`, which are fundamental tools for working with arrays in real-world applications.


## String Manipulation

The aim of this assignment is to acquaint students with various string manipulation techniques in JavaScript, including string length, case conversion, substring extraction, and string splitting.

## Objective

The goal is to demonstrate different string manipulation operations. The program should cover:

- Obtaining the length of a string
- Converting cases (upper and lower)
- Extracting substrings
- Splitting strings based on a delimiter

## Task 1: Obtaining String Length

### Description
- **Objective:** Determine the length of a string.
- **Steps:**
  1. Create a string with some text content.
  2. Use the `length` property to obtain the length of the string.

### Expected Outcome
Students should be able to understand how to determine the length of a string in JavaScript.

## Task 2: Converting Cases

### Description
- **Objective:** Convert a string to uppercase and lowercase.
- **Steps:**
  1. Create a string with mixed-case content.
  2. Use the `toUpperCase` method to convert the string to uppercase.
  3. Use the `toLowerCase` method to convert the string to lowercase.

### Expected Outcome
Students should be able to demonstrate the ability to convert strings between uppercase and lowercase in JavaScript.

## Task 3: Extracting Substrings

### Description
- **Objective:** Extract a substring from a string.
- **Steps:**
  1. Create a string with some text content.
  2. Use the `substring` method to extract a substring from the original string.

### Expected Outcome
Students should be able to extract substrings from a given string using the `substring` method in JavaScript.

## Task 4: Splitting Strings

### Description
- **Objective:** Split a string into an array of words based on a delimiter.
- **Steps:**
  1. Create a string containing multiple words separated by spaces.
  2. Use the `split` method to split the string into an array of words based on the space delimiter.

### Expected Outcome
Students should be able to split a string into an array of substrings using the `split` method in JavaScript.

## Conclusion

Upon completion of this assignment, students should be proficient in various string manipulation techniques in JavaScript, including obtaining string length, converting cases, extracting substrings, and splitting strings. They should also understand when and how to apply these techniques in practical programming scenarios.
