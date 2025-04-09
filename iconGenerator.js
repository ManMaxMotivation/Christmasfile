const fs = require('fs');

function generateIcon(stake, outputFile) {
    let icon = [];

    // Вычисляем ширину самой широкой строки ёлки
    const treeWidth = stake === 1 ? 4 : stake === 2 ? 6 : 2 + 5 + 4 * stake;

    // Функция для центрирования строки
    function centerTreeLine(line) {
        const padding = Math.max(0, Math.floor((treeWidth - line.length) / 2));
        return " ".repeat(padding) + line;
    }

    // Первая строка: "W"
    icon.push(centerTreeLine("X"));

    // Вторая строка: "*"
    icon.push(centerTreeLine("*"));

    // Генерируем строки "ёлки" (начиная с третьей строки)
    if (stake > 1) {
        for (let i = 0; i < stake - 1; i++) { // Ограничиваем до stake - 1
            let line = '';
            if (i === 0) {
                line = "@" + "*".repeat(5); // 6 символов: "@*****"
            } else if (i === 1) {
                line = "*".repeat(9) + "@"; // 10 символов: "*********@"
            } else if (i === 2) {
                line = "@" + "*".repeat(13); // 14 символов: "@*************"
            } else if (i === 3) {
                line = "*".repeat(18) + "@"; // 19 символов: "******************@"
            }
            icon.push(centerTreeLine(line));
        }
    }

    // Добавляем две строки "TTTT"
    icon.push(centerTreeLine("TTTT"));
    icon.push(centerTreeLine("TTTT"));

    // Сохраняем иконку в файл
    fs.writeFileSync(outputFile, icon.join("\n") + "\n");

    return icon;
}

module.exports = { generateIcon };