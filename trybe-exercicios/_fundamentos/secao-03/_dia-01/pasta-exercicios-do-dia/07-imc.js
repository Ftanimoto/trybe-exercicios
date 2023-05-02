/* André resolveu criar seu próprio programa de cálculo de Índice de Massa Corporal (IMC).
Tendo em vista que:
- A fórmula para calcular o IMC é divisão do peso (em kg) pela altura ao quadrado (em metros);
- André pesa 75 kg e sua altura é 1,80 m;
Qual deverá ser o algoritmo usado por André para calcular seu próprio IMC? */


let peso;
let altura;


let imc = peso/(altura ** 2);

console.log(imc);

peso = 16;
altura = 2;

imc = peso/(altura ** 2);

imc

console.log(imc);
