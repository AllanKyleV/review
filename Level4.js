// Problem framing (Core Skill)

// 19. Count Occurrences
function countOccurences(arr, target) {
    let count = 0;

    for (let num of arr) {
        if (num === target) count++;
    }

    return count;
}
console.log(countOccurences([1, 1, 2, 3, 4], 1));
console.log(countOccurences([1, 1, 2, 3, 4], 2));
console.log('--------------')

// 20. First match index
function findIndex(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        if (target === arr[i]) {
            return i;
        }
    }

    return -1;
}
console.log(findIndex([1, 2, 3, 4, 4], 4));
console.log(findIndex([1, 2, 3, 4, 4], 5));
console.log('--------------')

// 21. Two-step thinking
// - What does loop track? - Loop tracks the current position until given target is found.
// - When does the loop stop? - Loops stops when the target/condition is satisfied.

function findIndex(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (target === arr[i]) return i;
    }
    return -1;
}

console.log(findTheIndex([1, 2], 2));
console.log(findTheIndex([1, 2], 3));
console.log('--------------')

// 22. Pattern with numbers

// Pseudocode:
// Goal: Add numbers as strings, 1 to 1234
// start
// create a function patternWithNumbers that accepts target
// set start to '1'
// for i from 1 to target number
// log start
// start += String(i + 1);
// endfor
// end

function patternWithNumbers(target) {
    let start = '1';
    for (let i = 1; i <= target; i++) {
        console.log(start);
        start += String(i + 1);
    }
}

patternWithNumbers(4);