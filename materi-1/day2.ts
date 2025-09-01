// ===================== IF STATEMENT =======================
// syntax
/*
    if{codition} {
        code block
    }
*/

const age: number = 10;
if (age >= 17) {
  console.log("Anda Bisa Buat KTP");
}

// ===================== ELSE STATEMENT =======================
// backup plan dari if statement

const age2: number = 18;

if (age2 >= 17) {
  console.log("Anda Bisa Buat KTP");
} else {
  console.log("Anda Blum Bisa Buat KTP");
}

// ===================== ELSE IF STATEMENT =======================

const grade: string = "a";

if (grade === "a") {
  console.log("Nilai Bagus");
} else if (grade === "B") {
  console.log("Nilai Lumayan");
} else if (grade === "c") {
  console.log("Nilai Buruk");
} else {
  console.log("Nilai Tidak Diketahui");
}

// ===================== SWITCH CASE =======================
//syntax
/*
    switch(value){
    cacse value1:
        // add code here
        break;
    case value2:
        // add code here
        break;
    case value3:
        // add code here
        break;
    default:
        // add code here
        break;
        
    }
*/

const day: string = "selasa";

switch (day) {
  case "senin":
    console.log("Hari Senin");
    break;
  case "selasa":
    console.log("Hari Selasa");
    break;
  case "rabu":
    console.log("Hari Rabu");
    break;
  default:
    console.log("Hari Tidak ditemukan");
    break;
}

// ===================== LOGICAL OPERATOR =======================
// && -> AND
// || -> OR
// ! -> NOT

// AND -> Harus kedua kondisinya bernilai true agar menghasilkan nilai true
const umur: number = 20;
const punyaSIM: boolean = true;

if (umur >= 17 && punyaSIM) {
  console.log("Boleh Bawa Motor");
} else {
  console.log("Belum Boleh Bawa Kendaraan");
}

// OR -> kalau salah satu ada yang nilainya true, akan menghasilkan true

const car: string = "bmw";
//. true.
if (car === "bmw" || car === "mercy") {
  console.log("Mobil Eropa");
} else {
  console.log("Mobil Jepang");
}

// NOT -> membalikan nilai boolean
const isSunny: boolean = false;
const isRaining: boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

let a: number | undefined = undefined;

let b: number = 100;

const input = 20;

if (input !== b) {
  a = input;
}

// ===================== TERNARY OPERATOR =======================
// shortcut untuk if else condition
// condition ? true : false

const str: string = "javascript";

// cara panjang
if (str === "javascript") {
  console.log("javascript");
} else {
  console.log("not javascript");
}

//cara pendek
console.log(str === "javascript" ? "javascript" : "not javascript");

if (str === "javascript") {
  console.log("javascript");
} else if (str === "typescript") {
  console.log("not javascript");
} else {
  console.log("not found");
}

console.log(
  str === "javascript"
    ? "javascript"
    : str === "typescript"
    ? "typescript"
    : "not found"
);
// ======================= LOOP STATEMENT (PERULANGAN) ==========================
// rangkain instruksi yang dilakukan berulangkali hingga kondisinya tidak terpenuhi

// tipe loop: for loop, while loop, do while loop

// FOR LOOP -> mempunyai 3 statement
// statement 1 : menginisialisasikan variable dari looping itu sendiri
// statement 2 : mendefine kondisi dari looping tersebut
// statement 3 : kode yanf di eksekusi diakhir setiap iterasi

/*
    for(statement1;statement2;statement3;) {
        code block yang akan diulang
    }
*/

for (let i = 0; i < 10; i++) {
  console.log("hello world");
}

// WHILE
/*
    while(condition) {
        code block yang akan diulang
    }

*/

let i: number = 0;

while (i < 10) {
  console.log("heloo world");

  i++;
}

// DO WHILE
/*
    do {
        code block yang akan diulang
    } while (condition);

 */

let count: number = 7;

do {
  console.log("ini iterasi ke : " + count);
  count++;
} while (count <= 5);

// EXERCISE
// Cetak angka Genap dari 2 sampai 20 menggunkan looping

for (
  let i = 2 /* -> mulai dari angka 2 */;
  i <= 20 /* -> looping berjalan sampai 20 */;
  i += 2 /* -> setiap iterasi bertambah 2 hanya angka genap */
) {
  console.log(i);
}

// while loop
let i2 = 2;
while (i <= 20) {
  console.log(i);
  i += 2;
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}

// ======================= BREAK ==========================
// untuk berhentikan looping

let sum: number = 0;

while (true) {
  console.log(sum);

  if (sum >= 5) {
    break;
  }

  sum++;
}

// ======================= CONTINUE ==========================
// melakukan skip pda looping

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}
