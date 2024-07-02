"use strict";
// function declaration
function sapa(nama) {
    console.log("Halo, aku" + nama);
}
sapa("Hilman!");
function calculate(a, b, c) {
    return a + b + c;
}
let hasil = calculate(3, 5, 1);
console.log("Hasil Penjumlahan: " + hasil);
// Arrow Function
let multiplication = (x, y) => {
    return x * y;
};
let result = multiplication(5, 8);
console.log("Hasil Perkalian: " + result);
// challange funct expression
let cube = function (num) {
    return num ** 3;
};
console.log(cube(3));
// object
let person2;
person2 = {
    name: "Hilman Bintang Ardhani",
    age: 19,
    address: "Tegal"
};
console.log(person2);
