// nomor 1

let number: number = 9;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// nomor 2

let word: string = "madam";
if (word === word.split("").reverse().join("")) {
  console.log(`${word} -> palindrome`);
}

// nomor 3

let cm = 100000;
let km = cm / 100000;
console.log(`${cm} cm = ${km} km`);

// nomor 4

let amount = 1000;
let formatted = amount.toLocaleString("id-ID", {
  style: "currency",
  currency: "IDR",
});
console.log(` currency =${amount} IDR = ${formatted}`);

// nomor 5

let text = "Hello World";
let search = "ell";
let result = text.replace(search, "");
console.log(`${text}, ${search} -> ${result}`);

// nomor 6

let sentence = "hello world";
let capitalized = sentence
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(`${sentence} -> ${capitalized}`);

// nomor 7

let str = "The QuiCk BrOwn Fox";
let swapped = str
  .split("")
  .map((ch) => (ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()))
  .join("");
console.log(`${str} -> ${swapped}`);

// nomor 8

let num1 = 42;
let num2 = 27;
console.log(`${num2} -> ${num1 > num2 ? num1 : num2}`);

// nomor 9

let p = 42,
  f = 27,
  m = 18;
let soarted = ([] = [p, f, m].sort((x, y) => x - y));
console.log(soarted.join(", "));

// nomor 10

let input: any = "hello";
console.log(
  input,
  typeof input === "string" ? 1 : typeof input === "number" ? 2 : 3
);

// nomor 11

let string = "An apple a day keeps the doctor away".toLocaleLowerCase();
let replaced = string.replace(/a/gi, "*");
console.log(`${string} -> ${replaced} `);

// mac : shfit + option + f

// Versi Kak DANIEL
// // No 1
const angka: number = 4;

for (let i = 1; i <= 10; i++) {
  console.log(`${angka} x ${i} = ${angka * i}`);
}

// No 2

// [0] = m
// [1] = a
// [2] = d
// [3] = a
// [4] = m
// [5] = undefined

const kata: string = "madam";
let result1: string = "";

for (let i = kata.length - 1; i >= 0; i--) {
  result += kata[i]; // result = result + kata[i]
}

console.log(kata.length);
console.log(result);
console.log(result === kata);

// No 3
const cm1: number = 100_000;
const km1: number = cm / 100_000;
console.log(`${km} km`);

// No 4
const harga: number = 4000;
const hasil: string = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  //   maximumFractionDigits: 0,
}).format(harga);

console.log(hasil);

// No 5
const kalimat: string = "Hello World";
const search2: string = "ell";
const result2: string = kalimat.replace(search, "");
console.log(result2);

// No 6
const inputString: string = "hello world";
let words = inputString.split(" ");
console.log(words.length);
console.log(words[0]);
console.log(words[1]);
console.log(words[0][0]);
console.log(words[1][0]);

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}

console.log(words.join(" "));

// No 7
const inputString2: string = "The QuiCk BrOwN Fox";
let swappedString: string = "";

for (let i = 0; i < inputString2.length; i++) {
  if (inputString2[i] === inputString2[i].toUpperCase()) {
    swappedString += inputString2[i].toLowerCase();
  } else {
    swappedString += inputString2[i].toUpperCase();
  }
}

console.log(swappedString);

// No 8
const num3: number = 42;
const num4: number = 27;

// condition ? true : false
console.log(num1 > num2 ? num1 : num2);

// No 9
const number1: number = 42;
const number2: number = 27;
const number3: number = 18;

const smallest: number = Math.min(number1, number2, number3);
const largest: number = Math.max(number1, number2, number3);
const middle: number = number1 + number2 + number3 - smallest - largest;

console.log(`${smallest} ${middle} ${largest}`);

// No 10
const input1: any = undefined;

if (typeof input === "string") {
  console.log(1);
} else if (typeof input === "number") {
  console.log(2);
} else {
  console.log(3);
}

// No 11
// Cara 1
const input2: string = "An apple a day keeps the doctor away".toLowerCase();
const replaceWord: string = "a";
let modifiedString: string = "";

for (let i = 0; i < input2.length; i++) {
  if (input2[i] === replaceWord) {
    modifiedString += "*";
  } else {
    modifiedString += input2[i];
  }
}

console.log(modifiedString);

// Cara 2
console.log(input2.replaceAll("a", "*"));
