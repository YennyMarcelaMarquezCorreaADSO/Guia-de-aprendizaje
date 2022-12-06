addEventListener("DOMContentLoaded", (e)=>{
    let form = document.querySelector('#input')

    form.addEventListener("submit",(e)=>{
        e.preventDefault();       
        let dataInput = Object.fromEntries(new FormData(e.target))
        let dolares= Number (dataInput.dolares)
        let pesos= 4809.50
        let resultado= dolares * pesos



            let tabla=document.querySelector("tbody");
            tabla.insertAdjacentHTML("beforeend",`
                <tr>
                    <td> ${dolares} USD </td>
                    <td> ${resultado} COP </td>
                </tr>
                `)
     })   


     let form2=document.querySelector('#input2')

     form2.addEventListener("submit",(e)=>{
         e.preventDefault();       
 
         let dataInput2 = Object.fromEntries(new FormData(e.target))
 
 
 
 
 
             let pesos2= Number (dataInput2.pesos)
             let dolares2= 0.00021
             let res2= dolares2 * pesos2
 
 
 
             let tabla2=document.querySelector("#tabla2");
             tabla2.insertAdjacentHTML("beforeend",`
                 <tr>
                     <td> ${pesos2}  USD </td>
                     <td> ${res2} COP </td>
                 </tr>
                 `)
 
     })  


    
})