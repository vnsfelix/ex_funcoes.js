// 1- Crie uma função que receba um número e retorne o dobro.
function valor(numero) {
    return numero * 2
}
console.log(valor(22))

// 2- Crie uma função que receba um número e retorne o triplo.
function triplo(numero) {
    return numero * 3
}
console.log(triplo(10))

// 3- Crie uma função que receba dois números e retorne a soma.
function soma(a, b) {
    return a + b
}
console.log(soma(30, 90));

// 4- Crie uma função que receba dois números e retorne a multiplicação.
function multi(a, b) {
    return a * b
}
console.log(multi(10, 3))

// 5- Crie uma função que receba um salário e calcule aumento de 10%.
function salario(salarioInicial, aumento) {
    return salarioInicial + (salarioInicial * aumento)
}

console.log(salario(5000, 0.25));

// 6 - Crie uma função que imprima números de 1 até 10.
function contar() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
contar();

// 7- Crie uma função que some todos os números até 10.

function somarAteDez() {
  let soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += i;
  }
  return soma;
}

console.log(somarAteDez());