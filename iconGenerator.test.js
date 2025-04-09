const { generateIcon } = require('./iconGenerator');
const fs = require('fs');

describe('generateIcon', () => {
    const outputFile = 'test_icon.txt';

    afterEach(() => {
        if (fs.existsSync(outputFile)) {
            fs.unlinkSync(outputFile);
        }
    });

    test('should generate icon for stake = 1', () => {
        const expected = [
            " W",
            " *",
            "TTTT",
            "TTTT"
        ];

        const result = generateIcon(1, outputFile);
        console.log('Result for stake = 1:', result);
        expect(result).toEqual(expected);
        console.log('Test 1: Result matches expected');

        const fileContent = fs.readFileSync(outputFile, 'utf8').split("\n").slice(0, -1); // Убираем пустую строку в конце
        console.log('File content for stake = 1:', fileContent);
        expect(fileContent).toEqual(expected);
        console.log('Test 1: File content matches expected');
    });

    test('should generate icon for stake = 2', () => {
        const expected = [
            "  W",
            "  *",
            "@*****",
            " TTTT",
            " TTTT"
        ];

        const result = generateIcon(2, outputFile);
        console.log('Result for stake = 2:', result);
        expect(result).toEqual(expected);
        console.log('Test 2: Result matches expected');

        const fileContent = fs.readFileSync(outputFile, 'utf8').split("\n").slice(0, -1); // Убираем пустую строку в конце
        console.log('File content for stake = 2:', fileContent);
        expect(fileContent).toEqual(expected);
        console.log('Test 2: File content matches expected');
    });

    test('should generate icon for stake = 4', () => {
        const expected = [
            "           W",       // 11 пробелов
            "           *",       // 11 пробелов
            "        @*****",     // 8 пробелов
            "      *********@",   // 6 пробелов
            "    @*************", // 4 пробела
            "         TTTT",      // 9 пробелов
            "         TTTT"       // 9 пробелов
        ];

        const result = generateIcon(4, outputFile);
        console.log('Result for stake = 4:', result);
        expect(result).toEqual(expected);
        console.log('Test 4: Result matches expected');

        const fileContent = fs.readFileSync(outputFile, 'utf8').split("\n").slice(0, -1); // Убираем пустую строку в конце
        console.log('File content for stake = 4:', fileContent);
        expect(fileContent).toEqual(expected);
        console.log('Test 4: File content matches expected');
    });
});