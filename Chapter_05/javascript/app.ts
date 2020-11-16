// С помощью директивы reference подключается заголовочный файл (файл декларации) globals.d.ts.

/// <reference path="globals.d.ts" />

class Utility {
    static displayGlobalVariable() {
        console.log(globalVariable);
        display();
        for (var i = 0; i < points.length; i++) {
            console.log(`Point with coordinates x = ${points[i].x}; y = ${points[i].y}`);
        }
    }
}

window.onload = () => {
    Utility.displayGlobalVariable();
};
