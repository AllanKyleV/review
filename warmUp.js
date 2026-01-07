// Variable reset
let age = 15;
let fname = 'john';

// Simple function
function greet(name) {
    return `Hello ${name}`
}

console.log(greet(fname));

// Basic condition
function isAdult(age) {
    if (age >= 18) {
        return 'adult';
    } else {
        return 'minor';
    }
}

console.log(isAdult(age));

// Small loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Array touch
let numbers = [1, 2, 3]

// One tiny logic step
function sumTwo(a, b) {
    return a + b;
}
console.log(sumTwo(1, 2));

// Micro-Exercises
// Fix the array
console.log(numbers[0]);
console.log(numbers[2]);
console.log(numbers.length);

// Loop + Array
for (let num of numbers) {
    console.log(num);
}

// One condition inside loop
{
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log('even');
        } else {
            console.log('odd');
        }
    }
}

// Small function + loop
function countUp(n) {
    for (let i = 1; i <= n; i++) {
        console.log(`${i}`);
    }
}

console.log(countUp(5));