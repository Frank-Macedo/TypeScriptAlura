import { NegociacaoController } from "./controllers/negociacao-controller.js";
// import { AjaxTest } from "./testes/ajax.js";
const controller =  new NegociacaoController
const form = document.querySelector('.form');

if(form){
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    } )
}
else{
    throw Error('Não foi possível inicializar a aplicação, Verifique se o form é nulo')
}



// let ajax = new AjaxTest();
// ajax.httpGet("https://www.mercadobitcoin.net/api/BTC/ticker/",(status: number, response:string)=>{
//    const obj = JSON.parse(response);
//    debugger
//    console.log(obj.ticker.high)
// })