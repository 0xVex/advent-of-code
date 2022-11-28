import { input } from './input';

let max = input.length;
let current = 0;
let next = 1;
let deeper = 0;

while (current < max) {
    if (input[current] < input[next]) {
        deeper++;
    }
    current++;
    next++;
}

console.log(deeper);