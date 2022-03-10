import { View } from "./View.js";
export class NegociacaoView extends View {
    template(model) {
        debugger;
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
               ${model.lista().map(negociacao => {
            return `
                    <tr>
                       <td>${this.conversorDataToString(negociacao.data)}</td>
                       <td>${negociacao.quantidade}</td>
                       <td>${negociacao.valor}</td>
                    </tr>
                      `;
        })}
              </tbody>
        </table>
        `;
    }
    conversorDataToString(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
