function sortNumeberMethod(arr) {
    const sorted = [...arr].sort((a, b) => a - b);

    const heihest = sorted[sorted.length - 1];
    const lowest = sorted[0];
    const sum = sorted.reduce((a, b) => a + b);
    const average = sum / sorted.length;

    return {heihest, lowest, average};
}
console.log(sortNumeberMethod([5, 4, 24, 32, 10, 99]));
