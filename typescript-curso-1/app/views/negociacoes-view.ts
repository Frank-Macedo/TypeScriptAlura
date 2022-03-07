import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./View.js";

export class NegociacaoView extends View<Negociacoes>{


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

}