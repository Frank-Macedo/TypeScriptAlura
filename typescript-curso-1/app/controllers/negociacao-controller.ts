import { DiasDaSemana } from "../enuns/DiasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/MensagemView.js";
import { NegociacaoView } from "../views/negociacoes-view.js";


export class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView : NegociacaoView = new NegociacaoView('#negociacoesId')
    private mensagemView = new MensagemView('#mensagemView',true)





    constructor() {
        this.inputData = <HTMLInputElement>document.querySelector('#data');
        this.inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this.inputValor = <HTMLInputElement>document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes)

    }

    adiciona() : void {

    const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value)
        if(!this.ehDiaUtil(negociacao.data))
        {
             this.mensagemView.update('Apenas negociações em dias uteis são aceitas')
             return
        }               
        this.negociacoes.adiciona(negociacao)
        this.atualizaView()
        this.limparFormulario()
           
    }/*
    Comentando pra zoar o bagulho
     */

    private ehDiaUtil(data: Date) :boolean{
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
    }


    private limparFormulario(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = "";
        this.inputValor.focus()
    }

    private atualizaView(){
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update("Negociação Salva com Sucesso!!!")

    }


}