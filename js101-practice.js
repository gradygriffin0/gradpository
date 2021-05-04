"use strict";
//
// const books = [
//     {
//         "title": "Genetic Algorithms and Machine Learning for Programmers",
//         "price": 36.99,
//         "author": "Frances Buontempo"
//     },
//     {
//         "title": "The Visual Display of Quantitative Information",
//         "price": 38.00,
//         "author": "Edward Tufte"
//     },
//     {
//         "title": "Practical Object-Oriented Design",
//         "author": "Sandi Metz",
//         "price": 30.47
//     },
//     {
//         "title": "Weapons of Math Destruction",
//         "author": "Cathy O'Neil",
//         "price": 17.44
//     }
// ]


// function highestPriceBook(input){
//     var highestBook = [];
//
//     for(let i = 0; i < input.length; i++){
//         highestBook.push(input[i].price);
//     }
//     highestBook.sort(function (a, b){
//         return b - a;
//     });
//     for ( let j = 0; j < input.length; j++){
//         if (input[j].price === highestBook[0]){
//             return input[j];
//         }
//     }
//
// }
// highestPriceBook(books);
// console.log(highestPriceBook(books));

const shoppingCart = {
    "tax": .08,
    "items": [
        {
            "title": "orange juice",
            "price": 3.99,
            "quantity": 1
        },
        {
            "title": "rice",
            "price": 1.99,
            "quantity": 3
        },
        {
            "title": "beans",
            "price": 0.99,
            "quantity": 3
        },
        {
            "title": "chili sauce",
            "price": 2.99,
            "quantity": 1
        },
        {
            "title": "chocolate",
            "price": 0.75,
            "quantity": 9
        }
    ]
}



function mostSpentOnItem(input){
    var priceArr = [];
    for( let i = 0; i < input.items.length; i++){
        priceArr.push(input.items[i].price * input.items[i].quantity);
    }
    priceArr.sort(function(a,b){
        return b - a;
    });
    for(let j = 0; j < input.items.length; j++){
        if(priceArr[0].toFixed(2) == (input.items[j].price * input.items[j].quantity)){
            return input.items[j];
        }
    }
}

console.log(mostSpentOnItem(shoppingCart));


function addition(num) {
    return ++num
}