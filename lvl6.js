// Next Phase: Controlled Algorithms

// 23. Reverse an array (Manual)
function reverseArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.unshift(arr[i]);
    }

    return result;
}
console.log(reverseArray([1, 2, 3]))

// 24. Remove duplicates
function removeDulpicates(arr) {
    let result = [];

    for (let num of arr) {
        if (result.includes(num)) {
            continue;
        } else {
            result.push(num);
        }
    }

    return result;
}
console.log(removeDulpicates([1, 2, 3, 3, 4]));

// 25. Strategy Explanation
// for 'remove duplicates;
// What the loop tracks? - loop tracks the givin array
// What it remembers? - it remembers it the result array
// When it stops? - it skips when the item has duplicates in result array.

// 26. Check if an array is sorted ascending

function isSortedAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        } else {
            continue;
        }
    }
    return true;
}

console.log(isSortedAscending([1, 2, 3])); // true
console.log(isSortedAscending([2, 1, 6])); // false
console.log(isSortedAscending([2, 5, 10])); // true