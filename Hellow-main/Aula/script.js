alert("Ola mundo")

let nome = prompt("Qual seu nome?")
const numberSecret = 65 
let chance = 1

console.log(nome);


alert("Que bom que você veio "+ nome +"!!!!")

let tentativa = prompt ( nome +"em que número eu estou pensando de 1 a 100")

while (tentativa!=numberSecret && chance<5){
    let vidas = 5 - chance

    if (tentativa > numberSecret){
        tentativa = prompt("Errou tente novamente o número e menor tem " + vidas + " vida")}
        else{
            (tentativa<numberSecret)
            tentativa=prompt("Errou tente novamente o número e maior tem " + vidas + " vida")
        }

chance++;
console.log(chance)









}


console.log(tentativa)
if (tentativa==numberSecret)
    document.getElementById("readivinhacao").innerHTML = "Voce adivinhou!";
    else   
    document.getElementById("readivinhacao").innerHTML = "burro do cao";
    
