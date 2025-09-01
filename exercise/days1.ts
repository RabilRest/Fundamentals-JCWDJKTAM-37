// nomor 1
let lenRec: number = 5;
let width: number = 3;
let area: number = lenRec * width;
console.log(area);

// nomor 2

let lenRec2: number = 5;
let width2: number = 3;
let area2: number = 2 * (lenRec2 + width2);
console.log(area2);

// nomor 3

const radius = 5;

const diameter = 2 * radius;
const keliling = 2 * Math.PI * radius;
const luas = Math.PI * radius * radius;

console.log("Radius   :", radius);
console.log("Diameter :", diameter);
console.log("Keliling :", keliling.toFixed(2));
console.log("Luas     :", luas.toFixed(2));

// nomor 4

let a = 80;
let b = 65;
let c = 180 - (a + b);
console.log(c);

// nomor 5

let days = 400;
let year = Math.floor(days / 365);
days = days % 365;
let month = Math.floor(days / 30);
let day = days % 30;

console.log(year);
console.log(month);
console.log(day);
// PROBLEM
// MENCARI BEBERAPA TAHUN, BERAPA BULAN, BERAPA HARI DALAM HARI

//HINT
// 1. 1 TAHUN = 365 HARI
// 2. 1 BULAN = 30 HARI
// 3. UNTUK MENCARI TAHUN , TOTAL HARI DIBAGI DENGAN 1 TAHUN(365)
// 4. UNTUK MENCARI BULAN , TAHUN DICARI HASIL SISA DARI HASIL YANG SUDAH DIKURANG
//    365 KEMUDIAN DIBAGI DENGAN TAHUN
// 5. UNTUK MENCARI HARI, HASIL TOTAL HARI YANG SUDAH DIKURANG 1 TAHUN(365) - HASIL TOTAL HARI YANG SUDAH DIKURANG 1 BULAN(30)

// nomor 6
let d1 = new Date("2022-01-20").getTime();
let d2 = new Date("2022-01-22").getTime();
let diff = Math.abs(d2 - d1) / (1000 * 60 * 60 * 24);
console.log(diff);

// let dateT0= new Date("2025-03-20").getTime();
// let dateFrom = new Date("2025-03-22").getTime();

// console.log(dateTo.getTime()- dateFrom.getTime/ )

//PROBLEM
// MENCARI PERBEDAAN ANTARR 2 TANGGAL

//HINT
// 1. TANGGAL ITU DIMULAI DARI TAHUN 1970-01-01
// 2. TIPE DATA DATE MEMPUNYAI BUILD I METHOD UNTUK MENGAMBIL MILISECOND DARI TAHUN 1970-01-01 SAMPAI TANGGAL SEKARANG

//SOLUSI
// 1. TAMPUNG DATA TAHUN PERTAMA
// 2. TAMPUNG DATA TAHUN KEDUA
// 3. TAHUN PERTAMA - TAHUN KEDUA DAPAT MILISECOND ( MILISECOND PERBEDAAAN HARI KE DUA - HARI PERTAMA)
// 4. TAHUN PERTAMA - TAHUN KEDUA DIBAGI 1 MARI ADA BEBERAPA MILISECOND

// Write  a code to check whether the number is odd or even
// HINT
// 1. CTH: BILANGAN GENAP = 2, 4, 6, 8, 10 , 12
// 2. CTH: BILANGAN GANJIL = 1, 5, 7, 9, 11
// 3. SETELAH BILANGAN GANJIL PASTI BILANGAN  BULAT  KEBALIKANNYA  SETELAH BILANGAN GENAP PASTI BILANGAN GANJIL
// 4. SEMUA ANGKA YANG DIBAGI 2 JIKA HASILNYA GENAP MAKA DIA ADALAH GENAP
