"use strict";

//  5.* Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке.

function triangle(lines, symbol) {
    let str = ''
    for (let line = 1; line <= lines; line++) {
        for (let i = 0; i < line; i++) {
            str += symbol;
        }
        str += '\n';
    }
    return str;
}

// равнобедренный треугольник

function triangle2(lines, symbol) {
    let str = ''
    for (let line = 0; line < lines; line++) {
        for (let i = 1; i < lines - line; i++) {
            str += ' ';
        }
        for (let i = (lines - line * 2); i < (lines + 1); i++) {
            str += symbol;
        }
        str += '\n';
    }
    return str;
}

const lines = 7;
const sym = '*';
alert(triangle(lines, sym));
alert(triangle2(lines, sym));