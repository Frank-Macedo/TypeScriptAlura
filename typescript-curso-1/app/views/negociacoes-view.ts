export class NegociacaoView{

    private elemento : HTMLElement;
    constructor( private seletor : string){
        this.elemento = document.querySelector(seletor)

    }
    //teste conflito s

    template():string{
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
        `
    }

    update():void{
        this.elemento.innerHTML = this.template()
    }
}