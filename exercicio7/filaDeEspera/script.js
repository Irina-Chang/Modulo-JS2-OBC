/* Escreva um programa em javascript para simular uma fila de espera em um 
consultório médico. O programa deve iniciar mostrando na tela um menu 
interativo contendo a lista de todos os pacientes esperando em ordem 
mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). 
O menu também deve permitir escolher entre as opções de “Novo paciente”, 
para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), 
“Consultar paciente”, que retira o primeiro paciente da fila e mostra na 
tela o nome do paciente consultado, e “Sair”. O programa só deve ser 
encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu*/

/* 
for(let indice = 0; indice < pacientes.length; indice++){
        const elemento = pacientes[indice]}

*/
let paciente = ""
const pacientes = ["Matheus", "Ana", "Maria"]
let menu = ""

do {    
    menu = prompt("A lista de pacientes em espera é "+ "\n" + pacientes + 
            "\nEscolha uma opção abaixo: " +
            "\n1 - Novo paciente" +
            "\n2 - Consultar paciente" +
            "\n3 - Sair")

    switch(menu){
    case "1":
        paciente = prompt("Insira o nome do paciente: ")
        pacientes.push(paciente)
    break
    case "2": 
    paciente = pacientes.shift()
        alert("Consultando o paciente " + paciente)
    break
    case "3":
        alert("Encerrando o programa...")
    break
    default:
        alert("Opção inválida")

}
}while (menu !== "3")