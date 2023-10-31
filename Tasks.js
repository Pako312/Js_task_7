'use strict'

// 1) На forEach:

// - Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел

// - Дан массив с числами. Найдите сумму этих чисел.

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// arr.forEach(function(elem) {
// 	sum += elem;
// });

// let arr = [1, 2, 3, 4, 5];

// let sum = arr.forEach(function(elem){
// 	return elem**2;
// });
// console.log(sum);




// 2) На map:
// - Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел
// console.log(sum);
// const arr = [1, 2, 3, 4, 5];
// const squares = arr.map(function(elem){
//     return elem*elem
// });
// console.log(squares);

// 3) На reverse:
// - Дан массив с днями недели ['Понедельник', 'Вторник'...]. 
// Сделайте так, что он начинался с воскресенья и заканчивался понедельником.
// const array = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
// array.reverse()
// console.log(array)

// 4) На split и join:

// - C помощью метода join превратить массив [3, 2, 1] в строку "3 больше, чем 2 больше, чем 1"

// const elements = [3,2,1];

// console.log(elements.join(" больше, чем ", " больше, чем", ""));

// - Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

// let whatiamdoing = 'я учу javascript!'
// whatiamdoing = whatiamdoing.split(' ', 3);
// console.log(whatiamdoing);

// - В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.