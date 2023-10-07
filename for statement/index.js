// for statement
for (var i = 0; i < 3; i++) {
    let name = "Tomhard";
    console.log("Hi, My name is " + name);
}
    console.log("=======================")

// menampilkan urutan angka
for (let i = 2; i <= 5; i++) {
    console.log(i);
}
    console.log("=======================")

// Barisan bilangan genap
for(let i = 2; i <= 10; i+=2) {
    console.log(i);
}
    console.log("=======================")

// Barisan bilangan ganjil
for(let i = 1; i <= 10; i+=2) {
    console.log(i);
}
    console.log("=======================")

// Mematahkan operasi loop
for (let i = 1; i <= 10; i++) {
    if(i == 7 ){
        break;
    }
    console.log(i);
}
    console.log("=======================")

// menampilkan jumlah bilangan asli
let sum = 0;

for(let i = 1; i <= 10; i++) {
    sum += i; //this is same as: sum = sum + i
}
console.log ('The sumof 1 to 10 is: ', sum);
    console.log("=======================")

// menampilakn angka maksimum
// var numbers = [1,4,44,64,55,24,32,55,19,17,74,22,23];
// var max = 0;

// for (var i = 0; < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
// }
// console.log(max);

// menampilakn angka minimum
// var numbers = [1,4,44,64,55,24,32,55,19,17,74,22,23];
// var min = 0;

// for (var i = 0; < numbers.length; i++) {
//     if (numbers[i] < min) {
//         min = numbers[i];
//     }
// }
// console.log(min);

