// nomor 1

function numberTriangle(height: number) {
  let num = 1;
  for (let i = 1; i <= height; i++) {
    let row: string[] = [];
    for (let j = 1; j <= i; j++) {
      row.push(num.toString().padStart(2, "0")); // biar ada leading zero
      num++;
    }
    console.log(row.join(" "));
  }
}
numberTriangle(4);

// nomor 2

function fizzBuzz(n: number): (string | number)[] {
  return Array.from({ length: n }, (_, i) => {
    const num = i + 1;
    if (num % 5 === 0 && num % 5 === 0) return "FizzBuzz";
    if (num % 3 === 0) return "Fizz";
    if (num % 5 === 0) return "Buzz";
    return num;
  });
}

console.log(fizzBuzz(6));
console.log(fizzBuzz(15));

// nomor 3
function bmi(weight: number, height: number): string {
  const value = weight / (height * height); // tinggi dalam meter

  if (value < 18.5) return "less weight";
  if (value >= 18.5 && value <= 24.9) return "ideal";
  if (value >= 25.0 && value <= 29.9) return "overweight";
  if (value >= 30.0 && value <= 39.9) return "very overweight";
  return "obesitas";
}

console.log(bmi(50, 1.7));
console.log(bmi(65, 1.7));
console.log(bmi(95, 1.7));

//nomor 4
const points3: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = points3
  .map((point, index) => {
    console.log(index + 1);
    if (point <= 5) {
      return point * 2;
    }
    return undefined;
  })
  .filter((x) => x !== undefined);

console.log(result);

// nomor 5

const words = (text: string): string[] => {
  return text.split(" ");
};

console.log(words("Hello World"));
