/* Task 1: Adding and Removing Elements

Create an array containing some initial elements.
Use the push method to add a new element to the end of the array.
Use the pop method to remove the last element from the array.
*/
let fruits = ['apple', 'banana', 'orange'];

const pop_ele =  (arr) => {
    return arr.pop()
}

console.log(pop_ele(fruits))

// Task 2: Sorting Arrays

// Create an array of numbers in random order.
// Use the sort method to sort the array in ascending order.
let numbers = [3, 1, 5, 2, 4];

function sortEle(arr) {
    return arr.sort()
}

console.log(sortEle(numbers))


// Task 3: Applying Array Methods

// Create an array of numbers.
// Use the map method to double each number in the array.
// Use the filter method to filter out even numbers from the array.
// Use the reduce method to calculate the sum of all numbers in the array.


function arrayMethods(arr){
    let doubledArr = arr.map(ele => ele *2)
    
    let oddArr = doubledArr.filter(ele => ele % 2 != 0)

    if (oddArr.length === 0) {
        return "Elements inside arr equal zero as any x2 is even and the previous step filtered them all out"
    }
    else{
        let totalSum = oddArr.reduce((acc, curr) => acc + curr,)
        return totalSum
    }
}

console.log(arrayMethods(numbers))