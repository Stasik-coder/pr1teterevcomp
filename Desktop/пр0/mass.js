// 1. Сумма всех чисел массива
function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(sumArray([1, 2, 3]));
// 6


// 2. Только чётные числа
function filterEvenNumbers(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(filterEvenNumbers([1, 2, 3, 4]));
// [2, 4]


// 3. Найти максимальное число
function findMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(findMax([5, 2, 9, 1]));
// 9


// 4. Развернуть массив на один уровень
function flattenArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result.push(arr[i][j]);
        }
    }

    return result;
}

console.log(flattenArray([[1, 2], [3, 4]]));
// [1, 2, 3, 4]


// 5. Уникальные значения
function uniqueValues(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(uniqueValues([1, 2, 2, 3, 1]));
// [1, 2, 3]