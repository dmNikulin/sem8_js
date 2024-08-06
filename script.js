// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// function evenOddNumber(array) {
//     const even = '- четное число';
//     const odd = '- нечетное число';
//     const zero = "- это ноль";

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 0) {
//             console.log(array[i] + zero + '\n');
//         } else if (array[i] % 2 === 0) {
//             console.log(array[i] + even + '\n');
//         } else console.log(array[i] + odd + '\n');

//     }
// }

// evenOddNumber(arr);

// or

const even = '- четное число';
const odd = '- нечетное число';
const zero = "- это ноль";

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(i + zero + '\n');
    } else if (i % 2 === 0) {
        console.log(i + even + '\n');
    } else console.log(i + odd + '\n');

}