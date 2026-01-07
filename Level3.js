// 15. Summ all numbers
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4]));

// 16. Find the largest number
function findMax(arr) { 
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) max = arr[i];
    }

    return max;
}

console.log(findMax([1, 2, 3, 4]));

// 17. Early exit condition
function containZero(arr) {
    let found = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            found = true;
            break;
        }
    }

    if (found) {
        return true;
    }

    return false;
}

console.log(containZero([1, 2]));
console.log(containZero([1, 0, 3]));

// 18. Mini thinking exercise
// Question: What does the loop need to remember while running?

// From no. 17 exercise: while ruuning, the loop needs to remember that 'found' variable is false, until the condition is satisfied.