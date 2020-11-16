// /// <reference path="@types/jquery/index.d.ts"/>
/// <reference path="C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@types\\jquery\\index.d.ts"/>
// событие document.ready определено в jQuery, оно срабатывает при загрузке документа;
// с помощью лямбда-выражения, которое определяет функцию обратного вызова, на веб-страницу добавляется новый элемент
$(document).ready(function () {
    $("#content").html("<h1>Hello from jQuery</h1>");
});
// или сокращённое определение той же функции
$(function () {
    $("#content").html("<h1>Hello from jQuery</h1>");
});
// обработка нажатия на кнопку с id="btn" и установка значения элемента с id="content"
$(function () {
    $("#btn").click(function (e) { $("#content").html("<h1>Button clicked</h1>"); });
});
