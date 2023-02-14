import { lowercaseLetters, numbers, symbols, uppercaseLetters } from "../constants";
import { PasswordOptionsI } from "../interfaces";

export const generatePassword = (length: number, options: PasswordOptionsI): [string, number] => {
    let level = 0;
    const dict: string[][] = [];
    const password: string[] = [];

    if (options.uppercaseLetters) {
        dict.push(uppercaseLetters);
        level++;
    } if (options.lowercaseLetters) {
        dict.push(lowercaseLetters);
        level++;
    } if (options.numbers) {
        dict.push(numbers);
        level++;
    } if (options.symbols) {
        dict.push(symbols);
        level++;
    }

    if (level === 0) {
        throw new Error();
    }

    for (let i = 0; i < length; i++) {
        const param = Math.floor(Math.random() * dict.length);
        const character = Math.floor(Math.random() * dict[param].length);

        password.push(dict[param][character]);
    }

    return [password.join(''), level];
}