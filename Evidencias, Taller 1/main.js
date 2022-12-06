addEventListener("DOMContentLoaded", (e)=>{
    let form=document.querySelector('#input')


    form.addEventListener("submit",(e)=>{
        e.preventDefault();       
        let dataInput = Object.fromEntries(new FormData(e.target))
        let centigrados = Number (dataInput.centigrados)
        let fahrenheit= (centigrados*9/5)+32



            let tabla=document.querySelector("tbody");
            tabla.insertAdjacentHTML("beforeend",`
                <tr>
                    <td> ${centigrados}  </td>
                    <td> ${fahrenheit} </td>
                </tr>
                `)
     })        

    
})