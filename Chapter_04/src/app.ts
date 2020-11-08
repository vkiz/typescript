// С помощью директивы /// <reference path="personnel.ts"/> подключается файл personnel.ts.

// Для компиляции исходных файлов (app.ts и personnel.ts) в один выходной файл (app.js) используется опция компилятора tsc --outFile:
// tsc --outFile output.js input_1.ts input_2.ts ... input_n.ts
// tsc --outFile app.js app.ts personnel.ts

/// <reference path="personnel.ts"/>

let emp = new Pers.Employee("Chip");
console.log(emp.name);

let mgr = new Pers.Manager("Dale");
console.log(mgr.name);
