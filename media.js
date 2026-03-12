
// Desafio: Faça um programa que peça para o professor digitar 3 notas em sequencia
// Depois o programa irá calcular a média do aluno;
// Se a média for maior ou igual a 7, o programa deverá mostrar a mensagem: "Aluno Aprovado!"
// Se a média for menor que 5, o programa deverá mostrar a mensagem: "Aluno Reprovado!"
// Se a média estiver entre 5 e 7, mensagem: "Aluno de Recuperação!"

console.log("........... Boletim Escolar ...........");
console.log("\nA seguir digite as 3 notas, de 0 a 10:\n");

const prompt = require('prompt-sync')()

let nota1 = parseFloat(prompt('Digite a nota 1: '))
let nota2 = parseFloat(prompt('Digite a nota 2: '))
let nota3 = parseFloat(prompt('Digite a nota 3: '))

let media = (nota1 + nota2 + nota3) / 3

if (media >=7) { 
        console.log(`\nSua média foi ${media.toFixed(2)}. Aluno Aprovado!`)
}

else if (media >=5) { 
        console.log(`\nSua média foi ${media.toFixed(2)}. Aluno de Recuperação!`)
}

else {
        console.log(`\nSua média foi ${media.toFixed(2)}. Aluno Reprovado!`)
}

console.log("\n......... Programa finalizado .........\n\n");