console.log("oi")


class Pessoa {
    //atributos
    _nome
    _idade
    _peso
    _altura
    _imc //peso/ altura²

    constructor() {
        this._nome = '';
        this._idade = 0;
        this._peso = 0;
        this._altura = 0;
        this._imc = 0;
    }

    set setNome(novoNome) {
        return this._nome = novoNome;
    }
    get getNome() {
        return this._nome;
    }

    set setIdade(novaIdade) {
        return this._idade = novaIdade;
    }
    get getIdade() {
        return this._idade;
    }

    set setPeso(novoPeso) {
        return this._peso = novoPeso;
    }
    get getPeso() {
        return this._peso;
    }

    set setAltura(novaAltura) {
        return this._altura = novaAltura;
    }
    get getAltura() {
        return this._altura;
    }

    get getImc() {
        return this._imc;
    }
    CalculaImc() {
        return this._imc = this._peso / (this._altura * this._altura);
    }
}

let pessoa1 = new Pessoa
pessoa1.setNome = 'Pedro';
pessoa1.setAltura = 1.79;
pessoa1.setIdade = 29;
pessoa1.setPeso = 80;
pessoa1.CalculaImc();
console.log(pessoa1)

pessoa1.setNome = 'Lucas'
console.log(pessoa1)
console.log("Idade de Lucas é " + pessoa1.getIdade)