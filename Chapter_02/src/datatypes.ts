// Типы данных

// TypeScript - строго типизированный объектно-ориентированный язык, компилируется в JavaScript
// Базовые (примитивные) типы: boolean, number, string, array, tuple, enum, any, null и undefined, void, never

// let имя : тип = значение;
// если тип не указать явно, то компилятор выведет тип из присвоенного значения

// ключевое слово let введено в JavaScript в версии стандарта ES2015
// let безопаснее и предпочтительнее, чем var

let str = "Hello World";
// str = 100;   // ошибка

// boolean - логическое значение true или false

let isEnabled = true;
let isDisabled: boolean = false;

// number - число с плавающей точкой (в двоичной, восьмеричной, десятичной и шестнадцатиричной системе счисления)

let bin: number = 0b1010;
let oct: number = 0o454;
let hex: number = 0xff;
let decInteger: number = 300;
let decFloat: number = 123.45;

// string - строка символов
// строка в одинарных или двойных кавычках
// шаблон строки - строка в косых кавычках `` и подстановка выражения ${expression}
// многострочный текст в косых кавычках ``

let firstName: string = "John";
let lastName = 'Doe';
let info: string = `Имя: ${firstName}, Фамилия: ${lastName}`;
console.log(info); // Имя: John, Фамилия: Doe
let multiline: string = `Многострочный
текст`;

// array (массив) определяется с помощью выражения
// let имя : тип[] = [значение_0, значение_1, значение_2];
// или с помощью обобщённого типа (дженерик)
// let имя : Array<тип> = [значение_0, значение_1, значение_2];
// все элементы массива - одного типа
// доступ к элементу массива по индексу: имя[индекс]

let arrNum: number[] = [100, 200, 300];
console.log(arrNum[0]);

let arrStr: Array<string> = ["a", "b", "c"];
console.log(arrStr);    // (3) ['a', 'b', 'c']
console.log(arrStr[0]); // a

// многомерный массив
let arr2x5: number[][] = [[1,2,3,4,5], [6,7,8,9,10]]
console.log(arr2x5);        // (2) [Array(5), Array(5)]
console.log(arr2x5[0][1]);  // 2

// мультитипный массив - массив с элементами нескольких разных типов, разделённых через оператор |
let arrStrNum: (string|string|number)[] = ["a", "b", 100];
console.log(arrStrNum); // (3) ['a', 'b', 100]

// tuple (кортеж) - это массив с фиксированным числом элементов, типы которых известны, но не обязательно должны быть одинаковыми
// объявление: let имя : [тип_0, тип_1, ..., тип_n-1];
// инициализация: имя = [значение_0, значение_1, ..., значение_n-1];

let tp: [string, string, number];
tp = ["John", "Doe", 30];
console.log(`Имя: ${tp[0]}, Фамилия: ${tp[1]}, Возраст: ${tp[2]}`);

// enum (перечисление) - набор строковых констант (именованные константы)
// именованые константы могут описывать числа или строки
// объявление: enum имя { имя_0 = значение_0, имя_1 = значение_1, ..., имя_n-1 = значение_n-1 };
// по умолчанию первое значение = 0, последующие увеличиваются на 1, значения можно не указывать

enum Season  { Winter, Spring, Summer, Autumn };
enum Season1 { Winter = 1, Spring, Summer, Autumn };
enum Season2 { Winter = 12, Spring = 3, Summer = 6, Autumn = 9 };
enum Season3 { Winter = "December", Spring = "March", Summer = "June", Autumn = "September" };

let season: Season = Season.Spring;
console.log(season);    // 1

let seasonStr: string = Season[1];
console.log(seasonStr); // Spring

// any - описывает данные, тип которых может быть неизвестен на момент объявления

let varAny: any;
console.log(typeof varAny); // undefined

varAny = "String value";
console.log(typeof varAny); // string

varAny = 100;
console.log(typeof varAny); // number

let arrAny: any[] = ["John", 30, true];
console.log(typeof arrAny); // object (непримитивный тип)

// undefined и null - это типы и одновременно значения, которые могут быть присвоены данным любых типов
// по умолчанию undefined и null являются подтипами всех остальных типов
// undefined возвращается, если переменная была объявлена, но значение переменной не было установлено
// (или если свойство объекта не существует, или функция имеет отсутствующий параметр)
// null может рассматриваться как преднамеренное отсутствие значения какого-либо объекта
// (undefined указывает, что значение не установлено; null указывает на неопределенное значение)

let num: number;
console.log(num); // undefined

num = undefined;
num = null;
num = 100;

// void - отсутствие наличия какого-либо типа вообще, противоположность типу any
// используется в основном в качестве возвращаемого типа функций, которые не возвращают значение
// переменной типа void можно назначить только значение undefined и null
// (null - если не указан параметр компилятора "строгие проверки на null" --strictNullChecks)

function logMessage(msg: string): void {
    console.log(msg);
}

let varVoid: void = undefined;
varVoid = null;

// never - тип значений, которые никогда не встречаются (отсутствие значения)
// используется в качестве возвращаемого типа функций, которые генерируют или возвращают ошибку, или никогда не заканчиваются

function funcError(msg: string): never {
    throw new Error(msg);
}

function funcInfiniteLoop(): never {
    while (true) {
    }
}
