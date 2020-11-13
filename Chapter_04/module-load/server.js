// Сервер, который отдаёт пользователю статические файлы.

// Файл является модулем CommonJS, чтобы преобразовать его к модулю ES6 код можно изменить следующим образом:
// import { createServer } from "http";
// import { readFile } from "fs";
// http.createServer изменить на createServer
// fs.readFile изменить на readFile

var http = require("http");
var fs = require("fs");

http.createServer(function(request, response) {
    // получаем путь после слеша
    var filePath = request.url.substr(1);

    // установка пути по умолчанию
    if (filePath == "") filePath = "index.html";

    // считывание и отправка файлов
    fs.readFile(filePath, function(error, data) {
        if (error) { // если файл не найден
            response.statusCode = 404;
            response.end(`File ${filePath} not found`);
        } else {
            response.end(data);
        }
        return;
    });
}).listen(3000, function() {
    console.log("Сервер запущен по адресу http://localhost:3000/");
});
