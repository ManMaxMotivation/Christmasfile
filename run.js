const fs = require('fs');

const outputFile = 'christmas_tree.txt';

// Задаём ёлку вручную, как для stake = 5
const tree = [
    "              W",           // 14 пробелов
    "              *",           // 14 пробелов
    "           @*****",         // 11 пробелов
    "         *********@",       // 9 пробелов
    "       @*************",     // 7 пробелов
    "     ******************@",  // 5 пробелов
    "            TTTT",          // 12 пробелов
    "            TTTT"           // 12 пробелов
];

// Записываем в файл
fs.writeFileSync(outputFile, tree.join("\n") + "\n");

// Читаем и выводим содержимое для проверки
const content = fs.readFileSync(outputFile, 'utf8');
console.log('Содержимое файла christmas_tree.txt:\n', content);