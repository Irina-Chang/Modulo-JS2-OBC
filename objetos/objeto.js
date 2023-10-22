const pessoas = []
let menu = ""

do{ let pessoa ={}
    
    for (let i = 0; i < pessoas.length; i++) {
        const elemento = pessoas[i]
        console.log(elemento)
      }
   menu = prompt("Quantidade de pessoas cadastradas: " + pessoas.length +
    "\nEscolha uma opção abaixo:\n \n1- Adicionar pessoa \n2- Ver lista de pessoas \n3- Sair")

switch(menu){
    case "1":
        pessoa.nome = prompt("Insira o nome da pessoa:")
        pessoa.idade = prompt("Insira a idade da pessoa.")
        pessoas.push(pessoa)
    break

    case "2":
        if(pessoas){
            alert("Lista de pessoas cadastradas:\n"+ pessoas + ".\n")
        }else{
            alert("A lista está vazia!")
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