console.log("Hello Word");

// ini adalah comment 1

/* 
    ini-adalah-comment 2
*/

// ============= variable ================
// storage atau penampungan data
// var, let, const

var person = "budi";
console.log(person);

let person2 = "siti";
person2 = "Joko";

const person3 = "jack";
// person3 = "test"; // ini gak 

// windows : ctrl + k + q
// mac : cmd+k +q

// ================= Variable NAMING =================
/*
    -must contain only letters, digit, or symbol "$" and "_" 
    -the first character must not digit
    -case sensitive
*/

const companyProfile = "Purwadhika"; // camel Case
const CompanyProfile = "Purwadhika"; // Pascal Case
const company_profile = "Purwadhika"; // snack case

// =================== Data TYPES ========================
// Primitive data types: String, Number, Boolean, Null dan undefined
// Non Primitive data types: Object dan Array

// String -> "" '' ``
console.log ("Hello");
console.log ('Hello');
console.log (`Hello`);

// number -> 1 2 3 100 500 10000
console.log(1);
console.log(111);
console.log(100);
console.log(23);

// Boolean -> True or False
console.log(true);
console.log(false);

// null -> menandakan sebuah value itu masih kosong and belum terisi
let orang = null;

// undifined -> js tidak tau isinya
let orang2 = undefined;

console.log(typeof companyProfile);
console.log(typeof 100);
console.log(typeof true);
console.log(typeof orang2);