/*function calcularMedia(a, b){
    const media = (a+b)/2 
    return media //se não criar esse retorno, o resultado da media nao sera armazenado e nao ficara disponivel para usor. 
    }

    const resultado = calcularMedia(7,2)
    console.log (resultado) // o console log ira retornar undefined se nao existir o return.

    function criarProduto (nome, preco){
        const produto = {
            nome,
            preco,
            estoque :1
        }
        
        return produto
    }

    const notebook = criarProduto ("Notebook Intel Core 3 8GB", 2500)
    console.log(notebook)
    console.log(criarProduto ("Notebook Intel Core 3 8GB", 2500)) //podemos usar a forma reduzida para criar e chamar o objeto
*/

/*
    function areaRetangular(base, altura){
        //const area = base * altura
        //return area
        return base * altura // pode-se retornar diretamente, sem a necessidade de criar a variavel
    }
    //console.log( areaRetangular (3,5))

    function areaQuadrada(lado){
        return areaRetangular (lado, lado) //nos usamos a funcao areaRetangular para calcular a area do quadrado
    }
    //console.log (areaRetangular (7,5))
    console.log (areaQuadrada (5))

    */

    
    /*function ola(){
        let texto = "..."
        return texto // existe apenas um retorno para cada funcao
        texto = "Olá, mundo!" //qqr trecho abaixo de um return, dentro do mesmo escopo, nao sera rodado
        console.log (texto)
    }
    console.log (ola())

    function ola(){
        let texto = "..."
        texto = "Olá, mundo!" //este sera o valor retornado, pois esta acima do return
        return texto
        
    }
    console.log (ola())
*/
/*
function maioridade (idade){
    if(idade >= 18){
        return "Maior de idade!"
    } else {
        return "Menor de idade!"
    }
}

console.log (maioridade(19))
console.log(maioridade(14))
*/

/*
// Escopo é o contexto onde a variável foi declarada podendo ser
// mais externo, ou mais interno (se estiver dentro de um bloco)

// Variáveis no escopo mais externo podem ser
// usadas dentro de escopos mais internos
let pokemon = "Charmander"

function evoluir() {
  pokemon = "Charmeleon"
}

console.log(pokemon)
evoluir()
console.log(pokemon)

// Variáveis no escopo mais interno não podem ser
// usadas fora dele em escopos mais internos
function criarAnimal() {
  let animal = "Gato"
  
}

criarAnimal()
console.log(animal) // ELe vai retornar um erro, pois nao consegue acessar a variavel animal, criada dentro da funcao
*/

/*
// Apenas variáveis declaradas com var ficam
// disponíveis em um escopo mais externo
function avaliarNota(nota) {
    if (nota > 60) {
      var aprovado = true
      let situacao = "Aprovado" //desta linha para baixo nada vai ser acessado fora da funcao
    } else {
      var aprovado = false
      let situacao = "Reprovado"
    }
  
    console.log(nota)
    console.log(aprovado)
    console.log(situacao) // Gera erro
  }
  avaliarNota(91)
  avaliarNota(49)
  
  */

  /*
  // Mas mesmo o var não consegue "sair" para fora do escopo da função
  function ola() {
    var texto = "Olá, mundo!"
  }
  console.log(texto) // Gera erro

  */

  // Apenas variáveis declaradas com var são carregadas
// sempre no começo do código, acima de todo o resto

var nome = "Irina"
console.log(nome)

console.log(sobrenome)//ele nao consegue mostrar antes da inicialização
let sobrenome = "Chang"

console.log(sobrenome)