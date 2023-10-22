const pessoas = []
let menu = ""

do{ 
   menu = prompt("Quantidade de pessoas cadastradas: " + pessoas.length +
    "\nEscolha uma opção abaixo:\n \n1- Adicionar pessoa \n2- Ver lista de pessoas \n3- Sair")

switch(menu){
    case "1":
        const pessoa ={}
        pessoa.nome = prompt("Insira o nome da pessoa:")
        pessoa.idade = prompt("Insira a idade da pessoa.")

        const confirma = confirm(
            "Salvar esta pessoa?\n" +
            "\nNome: " + pessoa.nome +
            "\nIdade: " + pessoa.idade)

            if (confirma)
        {pessoas.push(pessoa)}
    break

    case "2":
        for (let i = 0; i < pessoas.length; i++) {
            alert(
                "Pessoa " + (i + 1) +
                "\nNome: " + pessoas[i].nome +
                "\nIdade: " + pessoas[i].idade )
           }
        
    break
    
    case "3":
        alert("Finalizando...")
    break
    
    default:
       alert("Opção inválida")
    break
}
}while(menu !== "3")