'use strict'
// 7
// + Создать tuple из 10 любых дробных чисел, найти максимальное и минимальное значение в нем

function minMax(i) {
    var result = [];
    result.push(Math.max(...i)); // ... - позволяет повторить итерацию, такую как выражение массива или строк, в местах, где ожидается ноль или больше аргументов.
    result.push(Math.min(...i));

    return result;
}
var i = [1.234, 234.435, 45.546, 0.5657, 23.456, 1231.3424, 32, 0.1222, 345.324, 9.234];
var a = minMax(i);
console.log('Max -', a[0], '\nMin -', a[1]);

// 11
// Создать матрицу любых чисел 3 на 4, сначала вывести все строки, потом все столбцы
// rows
var matrix = [[1, 2, 3, 10], [9, 7, 6, 5], [100, 0, 11, 4]];
for (i in matrix) {
    console.log(matrix[i]);
}
// columns  // с помощью =(
var matrix = [[1, 2, 3, 10], [9, 7, 6, 5], [100, 0, 11, 4]];
for(var column = 0; column <= matrix[0].length; column++) {
    var result = "";
    for(var row = 0; row < matrix.length; row++)
    {
        result = result + ' ' + matrix[row][column];
    }

    console.log(result);
}

// 12 ?
// Создать список любых объектов, в цикле напечатать в консоль: объект и его индекс
var value = [[1, 3, 10], 'Python', 100.4, {1:3}];
for (i in value) {
    console.log(i, value[i])
}

// 13
// + Создать список с тремя значениями 'to-delete' и нескольми любыми другими, удалить из него все значения 'to-delete'
var value = ['to-delete', 'Python', 'to-delete', 100.4, {1:3}, 'to-delete'];
for (var i = 0; i < value.length; i++) {
    if (value[i] == 'to-delete') {
        delete value[i];
    }
}

for (i in value) {
    console.log(value[i])
}
// =
var value = ['to-delete', 'Python', 'to-delete', 100.4, {1:3}, 'to-delete'];
for (i in value) {
    if (value[i] == 'to-delete') {
        delete value[i];
    }
}

for (i in value) {
    console.log(value[i])
}

// 14
// + Пройти по всем числам от 1 до 10 в обратную сторону (то есть: от 10 до 1), напечатать их в консоль
for (var i = 10; i > 0; i--) {
    console.log(i);
}


const concat = function()
{
    let arr = ['Earth', 'Russia', 'Moscow'];
    let str = arr.join('->');

    return str;
};

console.log(concat())


say('Max');

function say(name) {
    console.log(name + name)
}


function fuct(n) {
    if (n != 1) {
        return n * fuct(n - 1)
    } else { return n }
}
console.log(fuct(5))

function sum(n) {
    if (n != 1) {
        return n + sum(n - 1)
    } else { return n }
}
console.log(sum(4))

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
console.log(fib(7))
