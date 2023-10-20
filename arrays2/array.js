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