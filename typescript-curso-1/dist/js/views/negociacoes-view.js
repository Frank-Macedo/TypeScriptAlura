export class NegociacaoView {
    constructor(seletor) {
        this.seletor = seletor;
        this.elemento = document.querySelector(seletor);
    }
    //teste alteração
    template() {
        return `
        <table class = "table table-hover table bordered">
            <thead>
                <tr>
                    <th>data</th>
                    <th>quantidade</th>
                    <th>valor</th>
                </tr>            
            </thead>
        </table>
        `;
    }
    update() {
        this.elemento.innerHTML = this.template();
    }
}
