import { input } from './input';

let max = input.length - 2;
let current = 0;
let next = 1;
let deeper = 0;

while (current < max) {
    let firstTriple = input[current] + input[current + 1] + input[current + 2];
    let secondTriple = input[next] + input[next + 1] + input[next + 2];
    if (firstTriple < secondTriple) {
        deeper++;
    }
    current++;
    next++;
}

console.log(deeper);