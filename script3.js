function generateArray() {
    const arr = [];

    for (let i = 0; i < 5; i++) {
        arr.push(Math.round(Math.random() * 10));

    }
    console.log(arr);
    return arr;
}

function calcArray(arr) {
    let summaryArr = 0;
    let minNum = arr[0];
    let countNumThree = 0;

    for (let i = 0; i < arr.length; i++) {
        summaryArr += arr[i];

        if (minNum > arr[i]) {
            minNum = arr[i];
        }

        if (arr[i] === 3) {
            countNumThree++;
        }
    }

    console.log(`Сумма чисел массива: ${summaryArr}, минимальное значение: ${minNum}, число 3 встречается ${countNumThree} раз(а).`);
}

calcArray(generateArray());