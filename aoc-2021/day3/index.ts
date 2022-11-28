import { input } from './input';
//@ts-nocheck
let zero = 0;
let one = 0;
let currentBit = 0;

//@ts-ignore
const lsb = (input) => {
    for (currentBit; currentBit < input[1].length; currentBit++) {
        for (let i = 0; i < input.length; i++) {
            let bits = input[i].split('');
            if (bits[currentBit] === 0) {
                zero++
            }
            one++;
        }
        if (zero > one) {
            console.log(`Bit position ${currentBit} is 0`)
        }
        console.log(`Bit position ${currentBit} is 1`)
    }
}

lsb(input);