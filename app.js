function add(n1, n2) {
    // You can use this in Vanilla JavaScript
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorreect Input!');
    }
    return n1 + n2;
}
var number1 = 5;
var number2 = 8.87;
var result = add(number1, number2);
console.log(result);
