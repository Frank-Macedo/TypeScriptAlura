export abstract class View<T>{

    protected elemento :HTMLElement;
    private escapar: boolean = false;
    constructor(seletor : string, escapar? :boolean){
        this.elemento = document.querySelector(seletor);
        this.escapar = escapar
    }

    protected abstract template(model : T): string 

    
    update(model: T):void{
        let template = this.template(model)
        if(this.escapar){
            debugger;
            template = template.replace(/<script>[\s\S]*?<\/script>/,"")
        }
        this.elemento.innerHTML = template;
    }
}