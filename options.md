# Параметры компилятора tsc

[Параметры компилятора TypeScript](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

Некоторые параметры описаны ниже:

`--watch`, `-w` - автоматическая перекомпиляция файлов TypeScript при их изменении
```
tsc -w app.ts
```

 `--target`, `-t` - задание версии стандарта JavaScript (ECMAScript), в которую будет компилироваться код TypeScript (`ES3`, `ES5`, `ES6`/`ES2015`, `ES2016`, `ES2017`, `ES2018`, `ES2019`, `ES2020`, `ESNext`, по умолчанию `ES3`)
 ```
 tsc app.ts -t ES5
 ```
 
 `--removeComments` - удаление комментариев из целевого файла JavaScript
 ```
 tsc app.ts --removeComments
 ```
 
 `--outDir` - установка каталога для сохранения скомпилированных JavaScript файлов
 ```
 tsc --outDir "D:\Projects\TypeScript\out\js" app.ts
 ```
 
 `--outFile` - объединение нескольких файлов TypeScript в один скомпилированный файл JavaScript
 ```
 tsc --outFile output.js input1.ts input2.ts
 ```
 
 `--module`, `-m` - указание типа модуля, который будет использоваться для компиляции (`None`, `CommonJS`, `AMD`, `System`, `UMD`, `ES6`, `ES2015`, `ESNext`)
 ```
 tsc -m commonjs app.ts
 ```
 
 `-h` - вызов справки
 ```
 tsc -h
 ```
 
 Несколько параметров пишутся через пробел
 ```
 tsc -t ES5 --outDir js -m commonjs app.ts
 ```
 