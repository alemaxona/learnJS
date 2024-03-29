//Заметки по ES5 JS!

// Типы данных (всего - 6)
// number - 4, 4.32 Нет разделения на дробное и целое!
// Строки как в Python
// Boolean как в Python, только с маленькой буквы!

// И еще 3:
// null
// object ({objKey: "balue"})
// undefined - Значение неопределено! Например: переменная есть, а значение ей не присвоено.
// null - Значение отсутствует/пустое значение.

// + Новый - Symbol - символ

/*
Скрипты вставляются на страницу как текст в теге <script>, либо как внешний файл через <script src="путь"></script>
Специальные атрибуты async и defer используются для того, чтобы пока грузится внешний скрипт – браузер показал остальную (следующую за ним) часть страницы. Без них этого не происходит.
Разница между async и defer: атрибут defer сохраняет относительную последовательность скриптов, а async – нет. Кроме того, defer всегда ждёт, пока весь HTML-документ будет готов, а async – нет.
*/

// ??? ООП в JS нет, но есть есть полиморфизм.
// В JS практически нет Exeptions
// ; - Можно ставить, можно - нет, но в некоторых местах она нужна! Лучше всегда ставить!

'use strict'; // Необходимо всегда писать в самом начале скрипта! Строгий режим/Современный стандарт, для обратной совместимости!
// Если указать эту строку внутри функции, то современный режим будет работать только внутри функции!

// Новое объявление переменной в ES6!
let a = 2;  // Переменная с ограниченной областью видимости, например в scope {...} 
// То есть. Так будет работать:
console.log(legtBorderwidth);
var legtBorderwidth = 10;
// А так уже нет
console.log(rightBorderwidth);
let rightBorderwidth = 10;  // Создается только тогда, когда код до нее доходит.

// И константы в ES6
const ARR = [1, 2, 3];
ARR.push(5)  // (4) [1, 2, 3, 5]
ARR = 3;  // Error  // Нельзя переназначить!
// Договоренность о объявлении констант:
// Технически, константа является обычной переменной, то есть её можно изменить. Но мы договариваемся этого не делать.
var COLOR_RED = '#F00'

var $ = 'Dollar'
var _ = 'Underscore'

s = undefined
console.log(s)
// undefined
s = null
console.log(s)
// null
// Результат typeof(null) == "object" - true - это официально признанная ошибка в языке, 
// которая сохраняется для совместимости. На самом деле null – это не объект, а отдельный тип данных.
// Мы получим ошибку если выведем console.log(param), так как param нет, то есть - null!

alert( 1 / 0 ); // Infinity, бесконечность.
alert( "нечисло" * 2 ); // // Nan - не число!, ошибка

// Тип данных символ (Новый)
var sym = Symbol();

// В JS принято писать в стиле camelCase
// Ковычки могуть быть и те и другие.
var str = 'mystr'
// Методы строк
console.log(str.length)  // 5
console.log(str[0]) // m
console.log(str.toLocaleUpperCase())  // MYSTR
console.log(str.indexOf('str'))  // 2 // поиск подстроки
console.log(str.substr(1, 3)) // yst
console.log(str.substr(str.indexOf('my'), 2)) // my


// Числа
console.log(0xAB)  //В шестнадцатеричном виде
// 171
// Методы
var num = 8 / 6  // 1.3333333333333333
console.log(num.toString())  // Приводим к строке
console.log(+num.toFixed(3)) // 1.333  // + - Приведение к числу
// Проверка на число
console.log(isNaN(NaN))  // True
console.log(isNaN(num))  // False - Так как number


// == или ===
// Сравнение === проверяет точное равенство, включая одинаковый тип. Это самый очевидный и надёжный способ сравнения.
// Остальные сравнения == < <= > >= осуществляют числовое приведение типа
1 == '1'
// true  // Так как JS пытается првести к типу

1 === '1'
// false

var s = 'My var';
var myVar = "My var"
console.log(s == myVar)  // Вывод на экран
// true
console.log(s === myVar)
// true
console.log(typeof(s))
// string
// ==
console.log(typeof s)
// string
console.error(s)  // Вывод ошибок
// My var  // Error


// Приоритеты операторов (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
var result = 20 - 6 * 3 >= 1
//         3    13  14  11
// Сначала выполняются наибольшие по приоритету. Сначала - 14( * ), 13( - ), 11( >= ) и 3( = )
console.log(result)
// true


// Объекты (Почти подобие словарей Python)
var o = {}
console.log(o)
// {}
console.log(typeof(o))
// object
var o = {name: 'a', 2: 'b', 3: 'c'};
console.log(o["name"]);  // a
// ==
console.log(o.name);  // a
console.log(Object.keys(o))
// [ 'name', '2', '3' ]
// Объект в JS - это как dict в Python!
// Наследования нет, классов нет!
o['key'] = 12
console.log(o.key)  // Но уже ['some key'] через точку не получится!
// 12
console.log(o["key"])
// 12

var person = {
  name: 'Max',
  year: 1990,
  family: ['Kate', 'Maya'],
  car: {
    year: 2010,
    model: 'Opel'
  },
  calculateAge: function() {
    this.age = 2018 - this.year // = person.year
  }
}

console.log(person.name)  // Max
console.log(person['year'])  // 1990
var field = 'car'
console.log(person[field].year)  // 2010
person.year = 1988
console.log(person.year)  // 1988
person.calculateAge()  // 30


// Массивы  - так же, как и списки в Python, но это не тип, а - объект! О_о
// В данном случае ключ 0 = 1, ключ 1 = 2 и ключ 2 = 3!
var list = [1, 2, 3]
// (3) [1, 2, 3]
console.log(typeof(list))
// object
list.push('str')  // Добавление в список
console.log(list)
// 4) [1, 2, 3, "str"]
console.log(list.length)  // Длина массива (У словарей(объектов в JS) такого метода нет)
console.log(list.shift())  // Удаляет первый элемент
console.log(list.unshift(10))  // Добавляет первый элемент
console.log(list.indexOf('str'))  // 3

// Логическая арифметика
// Или - ||
alert( true || true ); // true
alert( false || true ); // true
alert( true || false ); // true
alert( false || false ); // false

// оператор ИЛИ вычисляет ровно столько значений, сколько необходимо – до первого true
var x;
true || (x = 1);
alert(x); // 1, x не присвоен
// А в примере ниже первый аргумент – false, так что ИЛИ попытается вычислить второй, запустив тем самым присваивание:

var x;
false || (x = 1);
alert(x); // 1


var hour = 9, isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
    alert('Upssss.')
}

// И - &&
// Итак, оператор && вычисляет операнды слева направо до первого «ложного» и возвращает его, а если все истинные – то последнее значение.
alert( true && true ); // true
alert( false && true ); // false
alert( true && false ); // false
alert( false && false ); // false

var hour = 12,
  minute = 30;
if (hour == 12 && minute == 30) {
  alert( 'Время 12:30' );
}

if (1 && 0) { // вычислится как true && false
    alert( 'не сработает, т.к. условие ложно' );
  }

// Приоритет у && больше, чем у ||
// Приоритет оператора И && больше, чем ИЛИ ||, так что он выполняется раньше.
 alert( 5 || 1 && 0 ); // 5

 // НЕ - !
alert(!true)  // false


// Преобразование типов. В JS особо не принято. Есть строка - работай со строкой.
// Типизация слабая!
+'1' //  FUCKING FUCK
// 1
alert(String(null) == 'null')  // String с большой буквы
// true
alert( "123" + undefined );
// "123undefined"
alert(Number('123'))  // Number с большой буквы
// 123
var a = +"123"; // 123
// ==
var a = "123"
Number(a); //123

var a = 12 
Boolean(a);  //12
// ==
!!a

Boolean(0)
// false
!1
// false
!!1
// true
!true
// false

// Еще как вариант
parseInt('1')
// 1
parseInt(0000000000000000000000000000001)  // Перевод из 2-ой в 10-ую систему 
// 1
parseInt('1v')
// 1
parseFloat('14.2sdf')
// 14.2


// Таблица приоритетов
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
var x = 2 * 2 + 1;
alert( x ); 
// 5

var apples = "2";
var oranges = "3";
alert(apples + oranges);  
//'23'
alert( +apples + +oranges ); 
// 5, число, оба операнда предварительно преобразованы в числа

var a = 1;
var b = 2;
var c = 3 - (a = b + 1);
alert( a ); 
// 3
alert( c ); 
// 0

// Остаток от деления
alert( 5 % 2 ); 
// 1

var i = 2;
i++;      // более короткая запись для i = i + 1.
alert(i); 
// 3

var i = 2;
i--;      // более короткая запись для i = i - 1.
alert(i); 
// 1

// Если результат оператора не используется, а нужно только увеличить/уменьшить 
// переменную – без разницы, какую форму использовать:
// ---------------------------
var i = 0;
i++;
++i;
alert( i ); 
// 2

// !!! 
var i = 1;
var a = ++i;  // Префиксная форма. Если хочется тут же использовать результат.
alert(a); 
// 2

var i = 1;
var a = i++; // Постфиксная форма. Если нужно значение до увеличения.
alert(a); 
// 1

alert( 2 * i++ ); // 2,  выполнился раньше но значение вернул старое
alert( i ); // 2
alert( 2 * i++ ); // 4
alert( i ); // 3

var i = 1;
alert( 2 * ++i ); // 4
alert( i ); // 2
alert( 2 * ++i ); // 6
alert( i ); // 3
// ---------------------------

// Разница между i++ и ++i является значением выражения.
// Значение i++ является значением i до приращения. Значение ++i является значением i после приращения.
// https://learn.javascript.ru/while-for  В самом низу
var i = 42;
alert(i++); // shows 42
alert(i); // shows 43
i = 42;
alert(++i); // shows 43
alert(i); // shows 43

var n = 2;
n += 5; // теперь n=7 (работает как n = n + 5). Так можно сделать для операторов +,-,*,/,%

// Строки сравниваются побуквенно.
// Значения разных типов приводятся к числу при сравнении, за исключением строгого равенства === (!==).
// Значения null и undefined равны == друг другу и не равны ничему другому.
// В обычном операторе == есть «проблема» – он не может отличить 0 от false:
 alert( 0 == false ); // true
// Та же ситуация с пустой строкой:
 alert( '' == false ); // true
// Это естественное следствие того, что операнды разных типов преобразовались к числу. 
// Пустая строка, как и false, при преобразовании к числу дают 0.
// Что же делать, если всё же нужно отличить 0 от false?
// Для проверки равенства без преобразования типов используются операторы строгого равенства === (тройное равно) и !==.
// Если тип разный, то они всегда возвращают false:
 alert( 0 === false ); // false, т.к. типы различны


//  prompt как и alert - модальные окна. То есть, пока их не закрыть, работа со страницей не продолжится.
var years = prompt('Сколько вам лет?', 100);  // Esc - отмена окна
// 'Сколько вам лет?' - Заголовок
// 100 - значение, которое показывается в строке ввода по умолчанию.
alert('Вам ' + years + ' лет!')

var test = prompt("Тест");
var test = prompt("Тест", '');   // Рекомендуется всегда ставить второй аргумент( для совместимости в IE)

var isAdmin = confirm("Вы - администратор?");  // OK or Cancel
alert( isAdmin ); // true or false

