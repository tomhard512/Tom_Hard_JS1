// 1. Membuat fungsi dengan cara biasa
function namaFunction(){
    console.log("Apa itu Cok?");
}
namaFunction();
    console.log("------------------------");

// 2.Membuat fungsi dengan ekspresi
var namaFunction = function(){
    console.log("oi Cuy,aman ya lek ya!");
}
namaFunction();
    console.log("------------------------");

// 3.Membuat fungsi dengan tanda panah
var namaFunction = () => {
    console.log("Mamen......,apa kabar!");
}

// atau seperti ini (jika isi fungsi hanya satu baris):
var namaFunction = () => console.log("Hello lek,sehat do barangi?");
namaFunction();
    console.log("------------------------");

// 4. Membuat fungsi dengan kostruktor
var namaFunction = new Function('console.log("Hello World!");');
namaFunction();
    console.log("------------------------");

// 5.Function dengan Parameter
function perkalian(a, b){
    hasilKali = a * b;
    console.log("Hasil kali a * b = " + hasilKali);
}
perkalian(3, 2);
    console.log("------------------------");

// 6.Fungsi yang mengembalikan nilai
function pembagian(a,b) {
    hasilBagi = a / b;
    return hasilBagi;
}

// memanggil fungsi
var nilaia = 20;
var nilaib = 10;
var hasilPembagian = pembagian(nilaia, nilaib);

console.log(hasilPembagian); 