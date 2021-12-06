function clicou () {
    document.getElementById('agradecimento').innerHTML = '<b>Obrigado por clicar</b>' // Injeta um elemento HTML, <b> é bold.
    //console.log(document.getElementById('agradecimento'))
    //alert('Obrigado por Clicar!')
}

function redirecionar () {
    //window.open("https://www.google.com/") // Abre a página em uma nova aba
    window.location.href = 'https://www.google.com/' // Abre na mesma aba
}

function trocar (elemento) {
    elemento.innerHTML = 'Obrigado por passar o mouse!'
    //document.getElementById('mousemove').innerHTML = 'Obrigado por passar o mouse!'
    //alert ('Trocar texto')
}

function voltar (elemento) {
    elemento.innerHTML = 'Passe o mouse aqui!'
    //document.getElementById('mousemove').innerHTML = 'Passe o mouse aqui!'
}

function load () {
    alert('Págna Carregada')
}

function funcaoChange (elemento) {
    console.log(elemento.value)
}

/*
function soma (n1, n2){
    return n1 + n2
}

var validar = 0

function validaIdade (idade){
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar
}
var idade = prompt ('Por favor, digite a sua idade')
validaIdade(idade)
console.log(validar)

//alert (soma(5,10))
*/


/*
var d = new Date ()
alert (d.getMonth()+1) // getMonth sempre começa contar do 0, então sempre incremente +1
alert (d.getDay())
alert (d.getHours())
alert (d.getMinutes())
*/


/*
var count
for (count = 0; count <=5; count ++) {
    alert (count)
}
*/


/*
var count = 0
while (count <= 5) {
    console.log(count)
    count++
}
*/


/*
var idade = prompt('Digite a sua idade: ') // Abre uma caixa de diálogo para entrada de dados
if (idade >= 18) {
    alert('Acesso autorizado')
} else {
    alert('Acesso negado, é preciso ter 18 anos de idade ou mais.')
}
*/


/*
var frutas = [{nome: 'Maçã', cor:'Vermelha'}, {nome: 'Uva', cor:'Roxa'}]
console.log(frutas)
alert(frutas[1].nome)
*/


/*
var fruta = {nome: 'Maçã', cor:'Vermelha'}
console.log(fruta.nome)
alert(fruta.cor)
*/


/*
var lista = ["Maçã","Pêra", "Laranja"]
lista.push('Uva') // Adiciona iten ao array
//lista.pop() // Retira o último item do array
console.log(lista)
console.log(lista.length) // Exibe a qtd de elementos do array
console.log(lista.reverse()) // Inverte a ordem dos elementos
console.log(lista.toString()) // Converte o array em string
console.log(lista.join(' - '))
//alert(lista[0])
*/

/*
var nome = "Jhonatas Santos"
var n1 = 5
var n2 = 3
var frase = "Japão é o melhor time do mundo!"
//alert(nome + " tem " + idade)
//alert(idade+idade2)

console.log(nome)
console.log(n1 * n2)
console.log(frase.replace("Japão", "Itália"))
console.log(frase.toUpperCase())
alert(frase.replace("Japão", "ITÁLIA"))
*/