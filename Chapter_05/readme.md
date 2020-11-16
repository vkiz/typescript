# Заголовочные файлы

Заголовочные файлы (файлы декларации, declaration files) - это файлы с расширением `.d.ts`, необходимые компилятору TypeScript.
Они выполняют роль обёрток над библиотеками JavaScript - описывают сигнатуру методов, свойств и др., не предоставляя при этом конкретной реализации.
Их действие во многом похоже на работу файлов с расширением `.h` в языках C/C++.

Примеры использования заголовочных файлов:

- [javascript](/javascript) - ts, js, html;
- [jquery](/jquery) - использование заголовочного файла [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/jquery/index.d.ts) для js-библиотеки [jQuery](https://jquery.com/).

Заголовочные файлы TypeScript для популярных библиотек расположены в репозитории https://github.com/DefinitelyTyped/DefinitelyTyped/.

Также можно установить заголовочные файлы с помощью менеджера пакетов [npm](https://www.npmjs.com/), входящего в состав Node.js, например:
```
cd "C:\Program Files\nodejs\node_modules\npm"
npm install @types/jquery
```
