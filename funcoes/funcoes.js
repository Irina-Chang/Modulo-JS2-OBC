/*function ola (){
    console.log("Olá, Mundo!")
}

ola()
ola()
ola()*/

/*function dobro (x){
    alert("O dobro de " + x + " é " + (x*2))
}

dobro(5)
dobro () // se chamar ela vazia, qdo ja foi declarada antes, ela vai retornar um erro inesperado
*/

/*function dizerOla (nome = "mundo")//declarando um valor padrao
{
    alert("Olá " + nome + "!")
}
dizerOla()// quando tem um valor padrão, ele vai retornar esse valor, mesmo nao estando presente na chamada
dizerOla("Irina")// qdo insere um valor na chamada, ele terá prioridade, em vez do valor padrão
*/

/*function soma (a,b)//pode-se colocar qtas variaveis quiser
{
    alert("O resultado da divisao é "+ (a/b))
}

soma(6,3) // a ordem importa, o valor vai ser atribuido de acordo com a ordem q foi declarado
*/

/*function criarUsuario (nome, email, senha, tipo="admin"){
    const usuario ={
        nome: nome,
        email: email,
        senha: senha,
        tipo: tipo
    }
    console.log(usuario)
}
criarUsuario("Irina", "irina@email.com", "1234")

function criarNovoUsuario(nome, tipo="admin", email, senha)//se for por um valor padrão, deixar ele no final
{
    const usuario = {
        nome,
        email,
        senha,
        tipo
       
    }
    console.log(usuario)
}
//criarNovoUsuario("Irina","irina@email.com", "1234") //vai dar erro de undefinied na senha

criarNovoUsuario("Irina", "admin","irina@email.com", "1234") // ter que reescrever o valor padrão perde tempo
*/

//Pode-se criar um objeto como parametro, qdo este tiver mtos dados
function muitosParametros(nome, telefone, endereco, aniversario,email,senha)
{   
    nome,
    telefone, 
    endereco, 
    aniversario,
    email,
    senha
}

muitosParametros("nome", "telefone", "endereco", "aniversario","email", "senha")

function objetoComoParametro(usuario){
    usuario.nome,
    usuario.telefone,
    usuario.endereco,
    usuario.aniversario,
    usuario.email,
    usuario.senha
   
}
const dadosDoUsuario ={
    nome:"",
    telefone:"",
    endereco:"",
    aniversario:"",
    email:"",
    senha:""
}
console.log(dadosDoUsuario)
objetoComoParametro(dadosDoUsuario)