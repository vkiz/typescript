# Пример загрузки модулей

Браузеры пока не поддерживают работу с модулями нативно.

Для загрузки модулей в браузер необходимо применять **загрузчик модулей**.

В этом примере используется загрузчик [SystemJS](https://github.com/systemjs/systemjs).

Требования:
- Необходим web-сервер, в примере [Node.js](https://nodejs.org/en/);
- Приложение TypeScript должно быть размещено на web-сервере;
- Загрузка модуля с сервера производится через AJAX.

Файлы проекта:
- [server.js](server.js) - код web-сервера, который отдаёт пользователю статические файлы;
- [index.html](index.html) - web-страница приложения;
- [app/app.ts](app/app.ts) - главный файл TypeScript-приложения;
- [app/devices.ts](app/devices.ts) - TypeScript-модуль.

В конце тела страницы [index.html](index.html) тегом `<script>` подключается загрузчик `SystemJS` для загрузки с сервера в браузер скомпилированных из TypeScript в JavaScript файлов из поддиректории `app`.

Библиотека загрузчика `SystemJS` берётся из [CDN-сервиса](https://ru.wikipedia.org/wiki/Content_Delivery_Network) [Cloudflare](https://cdnjs.com/).

CDN - Content Delivery Network / Content Distribution Network (Сеть доставки/дистрибуции содержимого).

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.21.0/system.js"></script>
```

Сборка и запуск:
- скомпилировать приложение TypeScript в JavaScript (app.ts);
- запустить веб-сервер (server.js на Node.js);
- перейти в браузере по адресу http://localhost:3000/.

```
tsc app/app.ts
node server.js
```

Примечание:

В реальном веб-приложении компиляция из TS в JS, а также ряд моментов, таких как сборка, минификация, тестирование и т.д., делается автоматически при старте приложения или при изменениях в файле. Для этого используются различные иструменты типа [Gulp](https://gulpjs.com/), [Webpack](https://webpack.js.org/) и другие.
