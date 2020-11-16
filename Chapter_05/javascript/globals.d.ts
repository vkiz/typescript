// Файл декларации

// С помощью ключевого слова declare определяются глобальная переменная, функция, массив объектов интерфейса,
// отсутствующие в TypeScript-коде, но объявленные в JavaScript-коде файла index.html.

declare var globalVariable: string;

declare function display(): void;

interface IPoint {
    x: number;
    y: number;
}

declare var points: IPoint[];
