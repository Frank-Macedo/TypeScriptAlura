import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacaoView } from "../views/negociacoes-view.js";


export class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesvIEW : NegociacaoView = new NegociacaoView('#negociacoesId')




    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesvIEW.update()

    }

    adiciona() : void {

        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao)
        console.log(this.negociacoes.lista())
        this.negociacoesvIEW.update()
        this.limparFormulario()

    }

    criaNegociacao() : Negociacao{
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp,','))
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)

        return new Negociacao(date,quantidade, valor);

    }

    limparFormulario(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = "";
        this.inputValor.focus()
    }


}