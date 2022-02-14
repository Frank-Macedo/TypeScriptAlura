// export class AjaxTest{
//     // 0 unitialized, 1 set up, but not sent, 2 sent, 3 in flight, 4 complete
//     private READY_STATUS_CODE: number = 4
//     private iscompleted(req:XMLHttpRequest){
//         return req.readyState === this.READY_STATUS_CODE
//     }
//     public httpGet(url: string, callback:(status: number, response:string)=>any): void{
//         let req = new XMLHttpRequest()
//         req.onreadystatechange = ()=>{
//             let finished = this.iscompleted(req)
//             if(finished){
//                 callback(req.status, req.responseText);
//             }
//         };
//         req.open("GET",url,true);
//         req.send();
//     }
// // }
