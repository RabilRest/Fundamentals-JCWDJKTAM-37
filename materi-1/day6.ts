// cara menulis objectt

const object1 = {}; // cara 1
const object2 = new Object(); // cara 2

interface User {
  name: string;
  age: number;
  email: string;
  score?: number;
  hobbies?: string[];
  greet: () => void;
}
const user: User = {
  name: "budi",
  age: 20,
  email: "budi@example.com",
  score: 90, // properti optional
  hobbies: ["reading", "gaming"], // properti optional
  greet() {
    console.log("Hello, my name is " + this.name);
  },
};
console.log(user.name); // mengakses properti object
console.log(user["age"]); // mengakses properti object cara 2
console.log(user.email); // mengakses properti object cara 3
console.log(user.score); // mengakses properti object cara 4
console.log(user.hobbies); // mengakses properti object cara 5

// =============================== ADD PROPERTY ===============================
const person: any = {
  name: "Alice",
  age: 30,
};
console.log(person);

// Menambahkan properti baru
person.email = "alice@example.com";

console.log(person);
person.address = "123 Main St";
console.log(person);

// =============================== DELETE PROPERTY ===============================
delete person.score;
console.log(person);
delete person["address"];
console.log(person);

//============================== IMMTABLE & MUTABLE ===============================
/**
 *  Immutable Object adalah objek yang tidak dapat diubah setelah dibuat.
 * (primitive data type adalah immutable)
 *
 *  Mutable Object adalah objek yang dapat diubah setelah dibuat.
 *  (Non-primitive data type adalah mutable)
 * */

// Contoh Immutable Object (primitive data type)
const count1: number = 10;
const count2: string = "Hello";
const count3: boolean = true;

console.log(count1);
console.log(count2);
console.log(count3);

// Contoh Mutable Object (non-primitive data type)
let orang1: any = { name: "John" };
// let oranng2: any =orang1; // ini referensi
let orang2: any = { ...orang1 }; // ini copy object baru

orang2.age = 30; // mengubah properti age pada orang2

console.log(orang1);
console.log(orang2);

// =============================== OPTIONAL CHAINING ===============================
/**
 * Optional Chaining (?.) adalah fitur di TypeScript yang memungkinkan kita untuk mengakses properti atau metode dari sebuah objek tanpa harus memeriksa apakah objek tersebut null atau undefined terlebih dahulu.
 * Jika objek tersebut null atau undefined, maka ekspresi akan menghasilkan undefined tanpa menimbulkan error.
 * */
const user2: any = {};
console.log(user2.address); // undefined, tidak error/data tidak ada
console.log(user2.address?.street); // undefined, tidak error/data tidak ada

// =============================== FOR IN ===============================
/**
 * for...in adalah perulangan yang digunakan untuk mengiterasi properti dari sebuah objek.
 * */
const person2: any = {
  name: "Aliace",
  age: 30,
  email: "aliace@example.com",
};
for (const key in person2) {
  console.log(key);
  console.log(person2[key]);
}

// =============================== DESTRUCTURING ASSIGMENT ===============================
// Destructuring Assignment adalah fitur di TypeScript yang memungkinkan kita untuk mengekstrak nilai dari sebuah objek atau array dan menyimpannya ke dalam variabel yang lebih mudah diakses.

// VERSI OBJECT
const animal: any = {
  name: "Bober",
  age: 5,
  type: "Dog",
};

console.log(animal.name); // mengakses properti name
console.log(animal.age); // mengakses properti age
console.log(animal.type); // mengakses properti type

const { name: animalName, age, type } = animal; // destructuring assignment
console.log(animalName); // mengakses variabel name
console.log(age);
console.log(type);

// VERSI ARRAY
const array = [1, 2, 3, 4, 5];

console.log(array[0]); // mengakses index ke 0
console.log(array[1]); // mengakses index ke 1

const [a, b] = array; // destructuring assignment
console.log(a); // mengakses variabel a
console.log(b); // mengakses variabel b

// =============================== SPREAD OPERATOR ===============================
/**
 * digunakan untuk mengcopy array atau object/ menggabungkan object
 * Spread Operator (...) adalah fitur di TypeScript yang memungkinkan kita untuk menyalin elemen dari sebuah array atau properti dari sebuah objek ke dalam array atau objek baru.
 * */
const objectone = { name: "John", age: 30 };
const objectwo = { email: "john@example.com" };

const result = { ...objectone, ...objectwo }; // menggabungkan objectone dan objectwo
console.log(result);

// ================================ THIS OBJECT ================================
/**
 * this adalah keyword yang digunakan untuk merujuk pada objek saat ini/ mengakses properti lain.
 * */

const peroson3 = {
  firstName: "Jane",
  lastName: "Doe",

  greet() {
    console.log("Hello, my name is " + this.firstName + " " + this.lastName);
  },
};

peroson3.greet(); // memanggil method greet

// ================================ CLASS ===============================
/**
 * Class adalah blueprint untuk membuat objek dengan properti dan metode tertentu.
 * */

// class declaration
class Car {
  greet() {
    console.log("Hello, I am a car");
  }
}

class Car3 {
  greet() {
    console.log("Hello, I am a car");
  }
}

const car1 = new Car();
const car2 = new Car3();
const car3 = new Car();

car1.greet();
car2.greet();
car3.greet();

// human
const test = {
  greeting() {
    console.log("Hello, I am a human");
  },
};

// human 3
const test3 = {
  greeting() {
    console.log("Hello, I am a human");
  },
};

test.greeting();
test3.greeting();

//================================= CONSTRUCTOR ===============================
/**
 * Constructor adalah metode khusus dalam sebuah kelas yang digunakan untuk menginisialisasi objek baru dari kelas tersebut.
 * */

class Person {
  name: string; // public property
  #email: string; // private property
  constructor(name: string, email: string) {
    this.name = name;
    this.#email = email;
  }
  greet() {
    return `Hello, my name is ${this.#email}`;
  }
}

const person1 = new Person("budi", "budi@gmail.com");
console.log(person1.name); // mengakses properti name
console.log(person1.greet()); // memanggil method greet

// person1.#email; // error, karena email adalah private property

// ================================ INHERITANCE ===============================
/**
 * Inheritance adalah konsep dalam pemrograman berorientasi objek yang memungkinkan sebuah kelas untuk mewarisi properti dan metode dari kelas lain.
 * properti dan metode yang diwarisi dapat digunakan atau diubah dalam kelas turunan.
 * */

// TIDAK MENGGUNAKAN INHERITANCE
class employee {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  work() {
    console.log(`${this.name} is working`);
  }
}

class Manager {
  name: string;
  salary: number;
  department: string;

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  work() {
    console.log(`${this.name} is managing the ${this.department} department`);
  }
}

class employee2 {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  work() {
    console.log(`${this.name} is working`);
  }
}

class Manager2 extends employee2 {
  department: string;

  constructor(name: string, salary: number, department: string) {
    super(name, salary);
    this.department = department;
  }
}

const manager = new Manager2("Alice", 5000, "IT");
console.log(manager.name); // mengakses properti name dari kelas induk
console.log(manager.salary); // mengakses properti salary dari kelas induk
console.log(manager.department); // mengakses properti department dari kelas turunan

const employee1 = new employee2("Bob", 3000);
console.log(employee1); // mengakses properti name dari kelas induk

//===================================instanceof====================================
/**
 * instanceof adalah operator di TypeScript yang digunakan untuk memeriksa apakah sebuah objek merupakan instance dari kelas tertentu atau bukan.
 * */

class Animal {}
class Dog extends Animal {}
class Tree {}

console.log(new Dog() instanceof Dog); // true
console.log(new Dog() instanceof Animal); // true
console.log(new Dog() instanceof Tree); // false
