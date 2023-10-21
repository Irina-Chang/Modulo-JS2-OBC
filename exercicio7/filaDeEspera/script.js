const pacientes = []
let menu = ""

do {  
    let paciente = ""  
    for(let indice = 0; indice < pacientes.length; indice++){
        paciente += (indice + 1) + "º - " + pacientes[indice] + "\n"}

        
    menu = prompt(
        "A lista de pacientes em espera é "+ "\n" + paciente + 
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
       if(paciente){
        alert("Consultando o paciente " + paciente)
       }else{ alert("Sem pacientes na fila!")}
    break
    case "3":
        alert("Encerrando o programa...")
    break
    default:
        alert("Opção inválida")

}
}while (menu !== "3")