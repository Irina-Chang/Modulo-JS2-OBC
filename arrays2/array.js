const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

//Adicionando elemento usando o PUSH -> ultimo lugar no array
//Retornando o tamanho do array apos inserir um elemento, criando uma variável tamanho para armazenar o valor
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

//Adicionando elemento usando o UNSHIFT -> primeiro lugar no array
//Retornando o tamanho do array apos inserir um elemento, criando uma variável tamanho para armazenar o valor
tamanho = arr.unshift("Faramir")
console.log(arr)
console.log(tamanho)

//Removendo elementos usando o POP -> ultimo lugar do array
//Retornando o elemento removido criando uma variavel ultimoElemento para armazenar o valor

let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//Removendo elementos usando o SHIFT -> ultimo lugar do array
//Retornando o elemento removido criando uma variavel ultimoElemento para armazenar o valor

ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

//Pesquisando um elemento usando INCLUDES -> retorna um valor booleano
//Ele pesquisa o valor exato do elemento

let inclui = arr.includes("Gandalf")
console.log(inclui)

inclui = arr.includes("Gandalf, o Cinzento")
console.log(inclui)

//Pesquisando o índice de um elemento usando o indexOF
const indice = arr.indexOf("Gandalf")
console.log(indice)

//Cortando uma parte do array usando o SLICE -> vai retornar um novo array com os elementos selecionados

const hobbits = arr.slice(0,4)
console.log(arr)
console.log(hobbits)

//Cortando uma parte do array contando a partir do ultimo elemento
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

//Concatenando arrays e elementos usando o CONCAT
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

//Substituindo elementos usando o SPLICE
//Requer 3 parâmetros ( indice do elemento a ser substituido, qtos elementos serão substituidos, qual valor(es) será incluido)
// Caso seja adicionado mais valores do que o numero de elementos a ser substituido, eles serao somados a lista, sem remover outros elementos
//const elementosRemovidos = sociedade.splice(indice, 1 , "Gandalf, o Cinzento", 1,3, false, true)
const elementosRemovidos = sociedade.splice(indice, 1 , "Gandalf, o Cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

//Fazendo iterações com elementos de um array
for(let indice = 0; indice < sociedade.length; indice++){
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice)
}