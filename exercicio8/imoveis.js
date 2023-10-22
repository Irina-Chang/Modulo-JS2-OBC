const listaImoveis = []
let menu = ""


do{ let imovel ={}
    
    for (let i = 0; i < listaImoveis.length; i++) {
        const elemento = listaImoveis[i]
        console.log(elemento)
      }
   menu = prompt("Quantidade de imóveis cadastrados: " + listaImoveis.length +
    "\nEscolha uma opção abaixo:\n \n1- Cadastrar um novo imóvel \n2- Ver lista de imóveis \n3- Sair")

switch(menu){
    case "1":
        imovel.proprietario = prompt("Indique o nome do proprietário:")
        imovel.quarto = prompt("Indique a quantidade de quartos:")
        imovel.banheiro = prompt("Indique a quantidade de banheiros.")
        imovel.garagem = prompt("Existe garagem no imóvel? (Sim/Não)")
        listaImoveis.push(imovel)
    break

    case "2":
        if(imoveis){
            alert("Lista de imoveis cadastrados:\n"+ imovel + ".\n")
        }else{
            alert("Não existem imóveis cadastrados!")
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