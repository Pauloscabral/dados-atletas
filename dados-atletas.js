class Atleta {
    constructor(nome, idade, peso, altura, notas,){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
 }
   obterNome(){
        return `Nome: ${this.nome}`;
    }
    obterIdade(){
        return `Idade: ${this.idade}`;
    }
    obterPeso(){
        return `Peso: ${this.peso}`;
    }
    obterCategoria(){
     if (this.idade >= 9 && this.idade <= 11 ){
       return `Categoria: Infantil`;
     }else if (this.idade >= 12 && this.idade <= 13 ) {
       return `Categoria: Juvenil`;
     }else if (this.idade >= 14 && this.idade <= 15 ){
       return `Categoria: Intermediário`;
     }else if (this.idade >= 18 && this.idade <= 30 ){
       return `Categoria: Adulto`;
     }else{
       return `Categoria: Sem categoria`;}
    };
    obterAltura(){
        return `Altura: ${this.altura}`;
    }

    obterNotas(){
        return this.notas;
    }
   
   obterImc(){
     const medirImc = this.peso / (this.altura * this.altura)
        return `IMC: ${medirImc}`;
    }
   obterNotas(){
        const notasV = this.notas
        return `Notas: ${notasV}`;
    }
  obterMedia(){
    const notasOrdenadas = [...this.notas].sort((a, b) => a - b);
    const notasValidas = notasOrdenadas.slice(1,4);
    const numNotas = notasValidas.length;
    const somaNotas = notasValidas.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;}, 0);//5-somar os notas
    const mediaNotas = somaNotas / numNotas;
    return `Média Válida:  ${mediaNotas}`;
  }
  }

// Uso da classe
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.obterNome());
console.log(atleta.obterIdade());
console.log(atleta.obterPeso());
console.log(atleta.obterAltura());
console.log(atleta.obterNotas());
console.log(atleta.obterCategoria());
console.log(atleta.obterImc());
console.log(atleta.obterMedia());
