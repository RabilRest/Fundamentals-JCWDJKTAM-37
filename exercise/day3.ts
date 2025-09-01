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

let string = "An apple a day keeps the doctor away";
let replaced = string.replace(/a/gi, "*");
console.log(`${string} -> ${replaced} `);
