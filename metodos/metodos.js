let pessoa = {
    nome : "Irina",
    idade : "39",

    dizerOla() {
        console.log("Olá mundo! Meu nome é " + this.nome)//o this.nome referencia a propriedade do objeto dentro do metodo
    }
}

console.log(pessoa)
pessoa.dizerOla()