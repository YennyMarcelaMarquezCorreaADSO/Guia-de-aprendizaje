addEventListener("DOMContentLoaded", (e)=>{
    let form=document.querySelector('#input')

    let conta = 1
    form.addEventListener("submit",(e)=>{
        e.preventDefault();    
        if(conta <= 40){
            let dataInput = Object.fromEntries(new FormData(e.target))
            let fech = dataInput.fecha
            let plans = dataInput.planes
            let tabla=document.querySelector("tbody");
            tabla.insertAdjacentHTML("beforeend",`
                <tr>
                    <td> ${conta} </td>
                    <td> ${fech}  </td>
                    <td> ${plans} </td>
                </tr>
                `)
            conta++
        }

     })         
})