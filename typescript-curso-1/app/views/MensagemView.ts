import { View } from "./View.js";

export class MensagemView extends View<string>{

    protected template(model : string): string {
        debugger;
        return `<p class= "alert alert-info">${model}</p>
        <script>alert('oi')<\/script>
        `
    }

}