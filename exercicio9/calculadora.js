

function areaTriangulo (){
    const base = parseFloat(prompt("Insira o valor da base do triângulo: "))
    const altura = parseFloat(prompt("Insira o valor da altura do triângulo: "))
     return (base*altura)/2   
 }

 function areaRetangulo (){
    const base = parseFloat(prompt("Insira o valor da base do retângulo: "))
    const altura = parseFloat(prompt("Insira o valor da altura do retângulo: "))
    return base * altura
}

function areaQuadrado (){
    const lado = parseFloat(prompt("Insira o valor do lado do retângulo: "))
    return lado * lado
}

function areaTrapezio (){
    const baseMaior = parseFloat(prompt("Insira o valor da base maior do trapézio: "))
    const baseMenor = parseFloat(prompt("Insira o valor da base menor do trapézio: "))
    const altura = parseFloat(prompt("Insira o valor da altura do trapézio: "))
    return ((baseMaior + baseMenor)*altura)/2
}

function areaCirculo (){
    const raio = parseFloat(prompt("Insira o valor do raio do círculo: "))
    return 3.14 *( raio * raio)
}


function exibirMenu(){
    return prompt("Selecione uma das opções para calcular a área geometrica desejada:"+
    "\n1 : Área do triângulo" +
    "\n2 : Área do retângulo" +
    "\n3 : Área do quadrado" +
    "\n4 : Área do trapézio" +
    "\n5 : Área do círculo" +
    "\n6 : Sair")
}


function executar(){

    let menu = ""

    do {
        menu = exibirMenu ()
        let resultado


        switch (menu){

        case "1":
            resultado = areaTriangulo ()
            break

        case"2":
            resultado = areaRetangulo ()
            break

        case"3": 
            resultado = areaQuadrado ()
            break

        case"4":
            resultado = areaTrapezio ()
            break

        case"5":
            resultado = areaCirculo ()
            break

        case"6":
        alert("Encerrando calculadora")
        break

        default:
            alert("Opção inválida!")
        break
    }
    if (resultado){
        alert ("O cálculo da área é " + resultado)
    }

}while(menu !== "6")
}

executar()