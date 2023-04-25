const frutas = ["laranja", "limão", "uva"]
//EXERCICIO 1 - COLOCANDO O ARRAY FRUTAS NO HTML
const fruta1 = document.getElementById("fruta-1")
fruta1.innerHTML = frutas[0]

const fruta2 = document.getElementById("fruta-2")
fruta2.innerHTML = frutas[1]

const fruta3 = document.getElementById("fruta-3")
fruta3.innerHTML = frutas[2]

// EXERCICIO 2 CRIANDO INPUT E ESCREVENDO NO CONSOLE
const texto = document.getElementById("texto") //dando acesso ao html

const imprimir = () => {
    console.log(texto.value); // variavel mostrando o que foi digitado no console
}

// EXERCICIO 3 INSERINDO 4ª FRUTA NA LISTA
const fruta4 = document.getElementById("fruta-4")

const inserirFruta = () => {
    fruta4.innerHTML = texto.value  // fruta 4 recebendo o valor digitado na caixa de texto
    texto.value = ""  // limpando a caixa de texto
} 
