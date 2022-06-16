function add(n1: number, n2: number) {
    // You can use this in Vanilla JavaScript
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorreect Input!')
    }
    return n1 + n2;
}

const number1 = 5;
const number2 = 8.87;

const result = add(number1, number2);
console.log(result); 