alert("Olá mundo!");
let nome = prompt("Qual seu nome?");

//ADIVINHAÇÃO

let numberSecret = Math.round(Math.random() * 100);
let chance = 10;
document.getElementById("readivinhacao").innerHTML

console.log(nome);

alert("Que bom que você veio " + nome + "!!!!");

function adivinhar() {

    let tentativa = document.getElementById("inputTentativa").value;

    chance--;
    console.log(chance);

    if (tentativa > numberSecret) {
        document.getElementById("readivinhacao").innerHTML = ("Errou, tente novamente. O número é menor! Tens mais " + chance + " vidas.");
    }
    else {
        document.getElementById("readivinhacao").innerHTML = ("Errou, tente novamente. O número é maior! Tens mais " + chance + " vidas.");
    }

    console.log(tentativa);
    if (tentativa == numberSecret) {
        document.getElementById("readivinhacao").innerHTML = "Você adivinhou!";
        document.getElementById('readivinhacao').style.color = "green";
    }
    else if (chance <= 0) {
        document.getElementById("readivinhacao").innerHTML = "Burro do cão >:(";

    }

}

//TABUADA

let a = 0;
let b = 0;
let resultado = 0;

function resetTabuada() {
    a = Math.round(Math.random() * 10);
    b = Math.round(Math.random() * 10);
    resultado = a * b;
    console.log(a + "x" + b + " = " + resultado);
    document.getElementById("calculo").innerHTML = (a + " x " + b);
}

resetTabuada();
function tabuada() {
    const resposta = document.getElementById("tabuada").value;
    console.log(resposta);

    if (resposta == resultado) {
        document.getElementById("resptabuada").innerHTML = "Você adivinhou! 🤩";
        document.getElementById("resptabuada").style.color = "green";
    } else {
        document.getElementById("resptabuada").innerHTML = "Burro da peste! 🤣";
         document.getElementById("resptabuada").style.color = "black";
    }

}

//EQUAÇÃO

let num1 = Math.round(Math.random()*10)
let num2 = Math.round(Math.random()*10)
let operador = Math.round(Math.random()*3)

switch (operador){
    case 0:
        operador = "+";
        resultadoEquacao = num1+num2;
    break;

    case 1:
        operador = "-";
        resultadoEquacao = num1-num2;
    break;

    case 2:
        operador = "*";
        resultadoEquacao = num1*num2;
    break;

    case 3:
        operador = "/"
        resultadoEquacao = num1/num2;

console.log(num1 + operador + num2 + "=" + resultadoEquacao)


}