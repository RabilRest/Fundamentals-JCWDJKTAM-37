// nomor 1
// Check if a number is odd or even
function checkOddEven(num: number): string {
  return num % 2 === 0 ? `${num} is an even number` : `${num} is an odd number`;
}
console.log(checkOddEven(25));
console.log(checkOddEven(2));

// ts basic
const numOddEven = 25 ;

if (numOddEven % 2 === 0) {
  console.log(`${numOddEven} -> even number`);
} else {
  console.log(`${numOddEven} -> odd number`)
}

// cara pendek
console.log(numOddEven % 2 === 0  ? "even number" : "odd number")

// nomor 2
// Check if a number is prime
function isPrime(num: number): string {
  if (num < 2) return `${num} is not a prime number`;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return `${num} is not a prime number`;
  }
  return `${num} is a prime number`;
}
console.log(isPrime(7));
console.log(isPrime(6));


// nomor 3
// Find SUM from 1 to N
function sumToN(n: number): string {
  const sum = (n * (n + 1)) / 2;
  return `Sum from 1 to ${n} is ${sum}`;
}
console.log(sumToN(5));
console.log(sumToN(3));

//ts basic
const N = 5;
let sum = 0;
let i = 1;
while (i <= N) {
  sum += i;
  i++;
}
console.log(`Sum 1..${N} = ${sum}`)

// nomor 4
// find factorial of a number

let num: number = 6;
let factorial: number = 1;

for(let i = num; i >= 1; i--) {
  factorial *= i;
}
console.log(`${num}! = ${factorial}`);


// nomorr 5
// Print the first N Fibonacci numbers

const Fibonacci = 15;

let k = 1 ;
let l = 1;
let count = 0;

while(count <Fibonacci) {
  console.log(k);
  const next = k + l;
  k = l;
  l = next;
  count++;
}

// HINT
// 1. FIBONACCI ADALAH HASIL PERTMABHAN 2 ANGKA SEBELUMNYA
// 2. DARI SOAL FIBONACCI SEQUENCE DIMULAI DARI 1 DAN BUKAN DARI 0
