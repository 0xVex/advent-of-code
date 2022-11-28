import { input } from './input';

let aim = 0;
let depth = 0;
let horizontal = 0;
let move = 0;
let amount = 1;

while (move < input.length) {
    if (input[move] === 'forward') {
        //@ts-ignore
        horizontal += input[amount];
        //@ts-ignore
        depth += input[amount] * aim;
    } else if (input[move] === 'down') {
        //@ts-ignore
        aim += input[amount];
    } else if (input[move] === 'up') {
        //@ts-ignore
        aim -= input[amount];
    }
    move += 2;
    amount += 2;
}

console.log(depth * horizontal);