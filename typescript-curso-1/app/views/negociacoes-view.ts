import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoView{

    private elemento : HTMLElement;
    constructor( private seletor : string){
        this.elemento = document.querySelector(seletor)

    }
    //teste alteração

    template(model: Negociacoes):string{
        return `
        <table class = "table table-hover table-bordered">
            <thead>
                <tr>
                    <th>data</th>
                    <th>quantidade</th>
                    <th>valor</th>
                </tr>            
            </thead>
        
            <tbody>
               ${model.lista().map(negociacao =>{
    return                 `
                    <tr>
                       <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                       <td>${negociacao.quantidade}</td>
                       <td>${negociacao.valor}</td>
                    </tr>
                      `
                })}
              </tbody>
        </table>
        `
    }

    update(model: Negociacoes):void{

        const template = this.template(model)
        console.log(template)
        this.elemento.innerHTML = template;
    }
}