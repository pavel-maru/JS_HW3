"use strict";

// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

const quantity = 100;
let simpleNumbers = []
let i = 1;
while (i <= quantity) {
    let count = 0;
    let j = 1;
    while (j < Math.sqrt(i) + 1) {
        if (i % j == 0) {
            count++;
        }
        j++;
    }
    if (count < 2) {
        simpleNumbers.push(i);
    }
    i++;
}
alert('Simple numbers from 1 to 100: ' + simpleNumbers)