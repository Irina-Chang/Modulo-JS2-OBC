/*Escreva um programa em javascript para simular um baralho de cartas. 
O programa deve iniciar mostrando na tela um menu interativo contendo 
a quantidade de cartas que estão atualmente no baralho e as opções de 
“Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar 
uma carta”, o programa deve perguntar o nome da carta e adicioná-la 
no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve 
retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. 
O programa só deve ser encerrado ao escolher a opção de “Sair”, 
caso contrário deve voltar ao menu.*/

let carta = ""
const baralho = []
let menu = ""

do {    
    menu = prompt("O total de cartas no baralho é de "+ " " + baralho.length + 
            "\nEscolha uma opção abaixo: " +
            "\n1 - Adicionar uma carta" +
            "\n2 - Puxar uma carta" +
            "\n3 - Sair")

    switch(menu){
    case "1":
        carta = prompt("Qual carta está adicionando a pilha: ")
        baralho.push(carta)
    break
    case "2": 
    carta = baralho.pop()
        alert("A carta retirada foi a  " + carta)
    break
    case "3":
        alert("Encerrando o programa...")
    break
    default:
        alert("Opção inválida")

}
}while (menu !== "3")