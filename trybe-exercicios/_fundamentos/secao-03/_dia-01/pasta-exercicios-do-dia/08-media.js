/* Faça um algoritmo que calcule a média das 3 notas de uma pessoa estudante e mostre, além do valor da média, uma mensagem de “Aprovação”, caso a média seja igual ou superior a 6, ou a mensagem “Reprovação”, caso a média das notas seja inferior a 6. Exiba no seguinte formato:
Aprovação, média: 7 ou Reprovação, média: 5. */

let nota1;
let nota2;
let nota3;

nota1 = 2;
nota2 = 8;
nota3 = 9;
let media = (nota1 + nota2 + nota3)/ 3;


let aprovado = media >= 7;
let reprovado = media <= 5;


console.log(aprovado, reprovado);

if (aprovado) {
    console.log('Aprovacao');
} else if (reprovado) {
    console.log('Reprovacao');
} else {
    console.log('Voce está no limbo ou eu não sei o que fazer');
}



console.log(media, media <= 7);