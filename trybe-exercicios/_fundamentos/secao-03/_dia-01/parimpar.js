/* Crie um algoritmo que descubra se um número é par ou ímpar. Exiba o resultado
no seguinte formato: " O número X é par." */

let number = 33;

/* se (verdadeiro) {
    este número é par
} senão {
    este número é ímpar.
} */

if (number % 2 == 0) {
    console.log('O número ' + number + " é par.");
}

console.log(2 == 2);
console.log(2 == '2'); // true pq ve apenas a equivalencia de valores mas não de tipos de dados (ex: ser string ou ser number, muito embora os valores sejam os mesmos)


