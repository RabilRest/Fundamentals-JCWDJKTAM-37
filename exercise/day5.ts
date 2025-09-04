// nomor 1
function getStatsWithoutSort(arr: number[]) {
  const sorted = [...arr].sort((a, b) => a - b);
  const lowest = [sorted[0]];
  const highest = [sorted[sorted.length - 1]];
  const average = [sorted.reduce((acc, val) => acc + val, 0) / sorted.length];
  return { lowest, highest, average };
}
const arr = [7, 2, 8, 3, 6, 4, 5, 1];
const stats = getStatsWithoutSort(arr);
console.log(stats);
console.log(getStatsWithoutSort([10, 20, 30, 40, 50]));

// nomor 2
function fruitStats(arr: string[]) {
  const fruitStats: string[] = ["apple, banana, apple, orange, banana, apple"];
  return fruitStats;
}
console.log(
  fruitStats(["apple", "banana", "apple", "orange", "banana", "apple"])
);

// nomor 3

function getSecondLowestWithSort(arr2: number[]): number | undefined {
  const uniqueSorted = Array.from(new Set(arr2)).sort((a, b) => a - b);
  return uniqueSorted[1];
}
arr.splice(arr.indexOf(2), 1);
arr.splice(4, 0, 2); // Hapus angka 2 dari posisi awalnya
const secondLowest = getSecondLowestWithSort(arr);
const arr2 = [5, 3, 8, 1, 4, 2, 7, 6];
console.log(secondLowest);

// nomor 4

function sumArrays(arr1: number[], arr2: number[]): number[] {
  return arr1.map((val, idx) => val + arr2[idx]);
}
const arrayA = [1, 2, 3, 4];
const arrayB = [5, 6, 7, 8];
const summedArray = sumArrays(arrayA, arrayB);
console.log(summedArray);

// nomor 5
function addUniqueElement<T>(arr: T[], element: T): T[] {
  if (!arr.includes(element)) {
    arr.push(element);
  }
  return arr;
}
const uniqueArray = addUniqueElement([1, 2, 3], 4);
console.log(addUniqueElement(uniqueArray, 5));
console.log(addUniqueElement(uniqueArray, 2));

// nommor 6
function sumNumbers(arr: any[]): number {
  return arr
    .filter((x) => typeof x === "number")
    .reduce((acc, val) => acc + val, 0);
}
console.log(sumNumbers(["3", 1, "string", null, false, undefined, 2]));

// nomor 7
function insertWithMax(max: number, ...nums: number[]): number[] {
  return nums.slice(0, max);
}
console.log(insertWithMax(5, 10, 24, 3, 6, 7, 8));

// nomor 8

function combineArrays<T>(a: T[], b: T[]): T[] {
  return [...a, ...b];
}
console.log(combineArrays([1, 2, 3], [4, 5, 6]));

// nomor 9

function findDuplicates(arr: number[]): number[] {
  return [...new Set(arr.filter((v, i, a) => a.indexOf(v) !== i))];
}
console.log(findDuplicates([1, 2, 3, 2, 4, 5, 3, 6, 1]));

//nomor 10

function diffArrays(a: number[], b: number[]): number[] {
  return [
    ...a.filter((x) => !b.includes(x)),
    ...b.filter((x) => !a.includes(x)),
  ];
}
console.log(diffArrays([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// nomor 11
function getPrimitives(arr: any[]): any[] {
  return arr.filter(
    (v) => v === null || (typeof v !== "object" && typeof v !== "function")
  );
}
console.log(getPrimitives([1, undefined, "string", {}, []]));

// nomor 12

function sumOfDuplicates(arr: number[]): number {
  const sorted = [...arr].sort((a, b) => a - b);
  let sum = 0;
  for (let i = 1; i < sorted.length; i++) {
    if (
      sorted[i] === sorted[i - 1] &&
      (i === 1 || sorted[i] !== sorted[i - 2])
    ) {
      sum += sorted[i];
    }
  }
  return sum;
}
console.log(sumOfDuplicates([10, 20, 40, 10, 50, 30, 10, 60, 10]));

// nomor 13
function rockPaperScissors(player: "rock" | "paper" | "scissors"): string {
  const choices = ["rock", "paper", "scissors"];
  const computer = choices[Math.floor(Math.random() * 3)];
  if (player === computer) {
    return "It's a tie!";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}
console.log(rockPaperScissors("rock"));
