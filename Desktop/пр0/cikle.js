// 1. Вывести числа от 1 до n
function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

printNumbers(5);
// 1
// 2
// 3
// 4
// 5


// 2. Факториал числа
function calculateFactorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(calculateFactorial(5));
// 120


// 3. Таблица умножения
function generateMultiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n + " * " + i + " = " + (n * i));
    }
}

generateMultiplicationTable(5);


// 4. Сумма цифр числа
function sumOfDigits(num) {
    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    return sum;
}

console.log(sumOfDigits(123));
// 6


// 5. Повторить строку count раз
function repeatString(str, count) {
    let result = "";

    for (let i = 0; i < count; i++) {
        result += str;
    }

    return result;
}

console.log(repeatString("ab", 3));
// ababab