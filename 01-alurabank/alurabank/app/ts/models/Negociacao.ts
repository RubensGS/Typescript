export class Negociacao {

    //Private -> quando vc não quer que ninguém tenha acesso a classe, sem ser a própria classe
    //Propriedades não podem receber uma nova atribuição
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number){}

    get volume(){
        return this.quantidade * this.valor;
    }
}