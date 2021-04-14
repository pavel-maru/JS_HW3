"use strict";

// 2. С этого урока начинаем работать с функционалом интернет-магазина. 
// Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины 
// в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. 
// Задачи:
// a. Организовать такой массив для хранения товаров в корзине;
// b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

const quantity = 100;
var basket = [];
let i;
for (i = 0; i < quantity; i++) {
    // basket[i] = (i + 1) * 100;
    basket[i] = Math.floor(Math.random() * 1000) + 100
    alert(basket[i])
}

alert(basket);

function countBasketPrice(basket_) {
    let sumPrice = 0;
    for (let i = 0; i < basket_.length; i++) {
        sumPrice += basket_[i];
    }
    return sumPrice;
}

alert(countBasketPrice(basket));

console.log(countBasketPrice(basket));