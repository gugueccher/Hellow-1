alert("Olá mundo!");
let nome = prompt("Qual seu nome?");

//ADIVINHAÇÃO

const numberSecret = Math.round(Math.random()*100);
let chance = 10;

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

let a = Math.round(Math.random() * 10);
let b = Math.round(Math.random() * 10);
let resultado = a * b;
console.log(a + "x" + b + " = " + resultado)
document.getElementById("calculo").innerHTML = (a + " x " + b)

function tabuada() {
    const resposta = document.getElementById("tentativaTabuada").value;
    console.log(resposta);
}