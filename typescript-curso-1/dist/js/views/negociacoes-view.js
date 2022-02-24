export class NegociacaoView {
    constructor(seletor) {
        this.seletor = seletor;
        this.elemento = document.querySelector(seletor);
    }
    //teste alteração
    template(model) {
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
                       <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                       <td>${negociacao.quantidade}</td>
                       <td>${negociacao.valor}</td>
                    </tr>
                      `;
        })}
              </tbody>
        </table>
        `;
    }
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
