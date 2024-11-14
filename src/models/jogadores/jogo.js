class Jogo {
    constructor(nome, quantidadeJogadores, mapa) {
        this.nome = nome;
        this.quantidadeJogadores = quantidadeJogadores;
        this.mapa = mapa;
    } 
}
class Desenvolvedor {
    constructor(id, nome, caracteristicas, culpado) {
        this.id = id;
        this.nome = nome;
        this.caracteristicas = caracteristicas;
        this.mapa = mapa;
        this.culpado = culpado;
    } 
}
class Sabotador {
    constructor(id, nome, caracteristicas, culpado) {
        this.id = id;
        this.nome = nome;
        this.caracteristicas = caracteristicas;
        this.mapa = mapa;
        this.culpado = culpado;
    } 
}


module.exports = Jogo;