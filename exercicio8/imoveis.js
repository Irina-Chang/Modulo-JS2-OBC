const listaImoveis = []
let menu = ""


do{    
   menu = prompt("Quantidade de imóveis cadastrados: " + listaImoveis.length +
    "\nEscolha uma opção abaixo:\n \n1- Cadastrar um novo imóvel \n2- Ver lista de imóveis \n3- Sair")

switch(menu){
    case "1":
        const imovel ={}
        imovel.proprietario = prompt("Indique o nome do proprietário:")
        imovel.quarto = parseFloat(prompt("Indique a quantidade de quartos:"))
        imovel.banheiro = parseFloat(prompt("Indique a quantidade de banheiros."))
        imovel.garagem = prompt("Existe garagem no imóvel? (Sim/Não)")

        const confirma = confirm(
            "Salvar este imóvel?\n" +
            "\nProprietário: " + imovel.proprietario +
            "\nQuartos: " + imovel.quarto +
            "\nBanheiros: " + imovel.banheiro +
            "\nPossui Garagem? " + imovel.garagem
          )
          if (confirma){
            listaImoveis.push(imovel)
        }
    break

    case "2":
        for (let i = 0; i < listaImoveis.length; i++) {
            alert(
              "Imóvel " + (i + 1) +
              "\nProprietário: " + listaImoveis[i].proprietario +
              "\nQuartos: " + listaImoveis[i].quarto +
              "\nBanheiros: " + listaImoveis[i].banheiro +
              "\nPossui Garagem? " + listaImoveis[i].garagem
            )
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