// 1. Сделать первую букву заглавной
function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetter("привет"));
// Привет


// 2. Перевернуть строку
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("abc"));
// cba


// 3. Посчитать количество гласных
function countVowels(str) {
    let count = 0;
    let vowels = "aeiou";

    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Hello"));
// 2


// 4. Обрезать строку
function truncateText(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + "...";
    }

    return str;
}

console.log(truncateText("Очень длинная строка", 10));
// Очень длин...


 // 5. Удалить все пробелы
function removeSpaces(str) {
    return str.replaceAll(" ", "");
}

console.log(removeSpaces("a b c"));
// abc